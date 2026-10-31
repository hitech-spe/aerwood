import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import emailjs from '@emailjs/browser';
import { EmailService, ContactEmailPayload } from './email.service';
import { environment } from '../../environments/environment';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmailService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.isBrowser).toBe(true);
  });

  it('should identify placeholder credentials as unconfigured', () => {
    // With default placeholder values
    expect(service.isConfigured()).toBe(false);
  });

  it('should simulate email dispatch when credentials are placeholders', async () => {
    const sendSpy = vi.spyOn(emailjs, 'send');
    const payload: ContactEmailPayload = {
      fullName: 'Mario Rossi',
      company: 'Studio Rossi',
      email: 'mario@rossi.it',
      role: 'progettista',
      message: 'Vorrei un preventivo per facciata ventilata'
    };

    await expect(service.sendContactEmail(payload)).resolves.toBeUndefined();
    // In simulated mode, emailjs.send should NOT be called
    expect(sendSpy).not.toHaveBeenCalled();
    sendSpy.mockRestore();
  });

  it('should call emailjs.send with correct payload when credentials are configured', async () => {
    const originalConfig = { ...environment.emailjs };
    environment.emailjs = {
      serviceId: 'service_real_123',
      templateId: 'template_real_456',
      publicKey: 'pk_real_789'
    };

    const sendSpy = vi.spyOn(emailjs, 'send').mockResolvedValue({
      status: 200,
      text: 'OK'
    });

    const payload: ContactEmailPayload = {
      fullName: 'Laura Bianchi',
      company: 'Edil Costruzioni',
      email: 'laura@edil.it',
      role: 'impresa',
      message: 'Richiesta campionatura'
    };

    await service.sendContactEmail(payload);

    expect(sendSpy).toHaveBeenCalledTimes(1);
    expect(sendSpy).toHaveBeenCalledWith(
      'service_real_123',
      'template_real_456',
      expect.objectContaining({
        from_name: 'Laura Bianchi',
        from_email: 'laura@edil.it',
        company: 'Edil Costruzioni',
        role: 'impresa',
        message: 'Richiesta campionatura'
      }),
      { publicKey: 'pk_real_789' }
    );

    // Restore original config & spy
    environment.emailjs = originalConfig;
    sendSpy.mockRestore();
  });

  it('should not throw and safely return when executed on server platform (SSR)', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        EmailService,
        { provide: PLATFORM_ID, useValue: 'server' }
      ]
    });
    const serverService = TestBed.inject(EmailService);
    expect(serverService.isBrowser).toBe(false);

    await expect(
      serverService.sendContactEmail({
        fullName: 'Test',
        email: 'test@test.com',
        role: 'privato',
        message: 'Test SSR'
      })
    ).resolves.toBeUndefined();
  });
});
