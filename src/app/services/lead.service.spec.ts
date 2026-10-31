import { TestBed } from '@angular/core/testing';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LeadService, ContactLead } from './lead.service';
import { EmailService } from './email.service';
import { FirebaseService } from './firebase.service';

describe('LeadService', () => {
  let leadService: LeadService;
  let emailServiceMock: { sendContactEmail: ReturnType<typeof vi.fn> };
  let firebaseServiceMock: { isBrowser: boolean; db: unknown };

  beforeEach(() => {
    emailServiceMock = {
      sendContactEmail: vi.fn().mockResolvedValue(undefined)
    };

    firebaseServiceMock = {
      isBrowser: true,
      db: {}
    };

    TestBed.configureTestingModule({
      providers: [
        LeadService,
        { provide: EmailService, useValue: emailServiceMock },
        { provide: FirebaseService, useValue: firebaseServiceMock }
      ]
    });

    leadService = TestBed.inject(LeadService);
  });

  it('should be created', () => {
    expect(leadService).toBeTruthy();
  });

  it('should delegate sendContactRequest to EmailService and NOT to Firestore', async () => {
    const lead: ContactLead = {
      fullName: 'Marco Verdi',
      company: 'Verdi Design',
      email: 'marco@verdi.it',
      role: 'progettista',
      message: 'Preventivo per rivestimento 100mq',
      privacyConsent: true
    };

    await leadService.sendContactRequest(lead);

    expect(emailServiceMock.sendContactEmail).toHaveBeenCalledTimes(1);
    expect(emailServiceMock.sendContactEmail).toHaveBeenCalledWith({
      fullName: 'Marco Verdi',
      company: 'Verdi Design',
      email: 'marco@verdi.it',
      role: 'progettista',
      message: 'Preventivo per rivestimento 100mq'
    });
  });

  it('should support backward-compatible saveContactRequest by forwarding to sendContactRequest', async () => {
    const lead: ContactLead = {
      fullName: 'Anna Neri',
      email: 'anna@neri.it',
      role: 'privato',
      message: 'Info prezzi',
      privacyConsent: true
    };

    await leadService.saveContactRequest(lead);

    expect(emailServiceMock.sendContactEmail).toHaveBeenCalledTimes(1);
    expect(emailServiceMock.sendContactEmail).toHaveBeenCalledWith({
      fullName: 'Anna Neri',
      company: undefined,
      email: 'anna@neri.it',
      role: 'privato',
      message: 'Info prezzi'
    });
  });
});
