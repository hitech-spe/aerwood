import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactEmailPayload {
  fullName: string;
  company?: string;
  email: string;
  role: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private platformId = inject(PLATFORM_ID);
  public readonly isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Verifica se le credenziali EmailJS sono state configurate con valori reali.
   */
  isConfigured(): boolean {
    const config = environment.emailjs;
    return !!(
      config &&
      config.publicKey &&
      config.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
      config.serviceId &&
      config.serviceId !== 'service_airwood' &&
      config.templateId
    );
  }

  /**
   * Invia un'email di richiesta preventivo o contatto tramite EmailJS.
   * In ambiente di sviluppo o in assenza di credenziali reali, simula l'invio
   * registrando un log con i parametri del template.
   */
  async sendContactEmail(payload: ContactEmailPayload): Promise<void> {
    if (!this.isBrowser) {
      console.warn('EmailService: Invio email non disponibile in ambiente SSR.');
      return;
    }

    const { serviceId, templateId, publicKey } = environment.emailjs;

    const templateParams: Record<string, unknown> = {
      to_name: 'AIRWOOD / Forte Srl',
      from_name: payload.fullName,
      from_email: payload.email.trim().toLowerCase(),
      reply_to: payload.email.trim().toLowerCase(),
      company: payload.company?.trim() || 'Non specificata',
      role: payload.role,
      message: payload.message,
      subject: `Richiesta Preventivo / Contatto da ${payload.fullName}`,
      date: new Date().toLocaleString('it-IT')
    };

    if (!this.isConfigured()) {
      console.info(
        '[EmailJS] Invio email simulato (chiavi placeholder rilevate in environment.ts).\n' +
        'Per l\'invio reale delle email, configura i campi serviceId, templateId e publicKey in src/environments/environment.ts.\n' +
        'Dati inviati alla funzione:',
        templateParams
      );
      // Simula la latenza di rete per un feedback realistico dell'interfaccia utente
      await new Promise(resolve => setTimeout(resolve, 500));
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey
      });
    } catch (error) {
      console.error('EmailService: Errore durante l\'invio con EmailJS:', error);
      throw error;
    }
  }
}
