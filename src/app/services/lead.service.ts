import { Injectable, inject } from '@angular/core';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { EmailService } from './email.service';

export interface CatalogLead {
  email: string;
  catalogType: 'catalogo_generale_2026' | 'cartella_colori';
  privacyConsent: boolean;
  downloadedAt?: unknown;
}

export interface ContactLead {
  fullName: string;
  company?: string;
  email: string;
  role: 'progettista' | 'posatore' | 'rivenditore' | 'impresa' | 'privato' | 'altro';
  message: string;
  privacyConsent: boolean;
  honeypot?: string;
  createdAt?: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private fb = inject(FirebaseService);
  private emailService = inject(EmailService);

  async saveCatalogDownload(email: string, catalogType: 'catalogo_generale_2026' | 'cartella_colori'): Promise<void> {
    if (!this.fb.isBrowser || !this.fb.db) {
      console.warn('LeadService: Firestore not initialized or SSR environment.');
      return;
    }
    const col = collection(this.fb.db, 'catalog_downloads');
    await addDoc(col, {
      email: email.trim().toLowerCase(),
      catalogType,
      privacyConsent: true,
      downloadedAt: serverTimestamp()
    });
  }

  /**
   * Invia la richiesta preventivo/contatto via EmailJS (senza salvare su Firestore).
   */
  async sendContactRequest(data: ContactLead): Promise<void> {
    await this.emailService.sendContactEmail({
      fullName: data.fullName,
      company: data.company,
      email: data.email,
      role: data.role,
      message: data.message
    });
  }

  /**
   * Alias retrocompatibile: inoltra alla nuova gestione con EmailJS.
   */
  async saveContactRequest(data: ContactLead): Promise<void> {
    return this.sendContactRequest(data);
  }
}
