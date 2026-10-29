import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';

export interface TechDocument {
  id: string;
  title: string;
  category: 'datasheet' | 'installation' | 'specs' | 'declaration' | 'cad';
  categoryLabel: string;
  profile: '25-4' | '25-7' | '25-10' | '25-MIX' | 'all';
  revision: string;
  date: string;
  format: string;
  status: 'available' | 'draft' | 'coming_soon';
  url?: string;
  size?: string;
}

@Component({
  selector: 'app-technical',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './technical.component.html',
  styleUrl: './technical.component.scss'
})
export class TechnicalComponent {
  readonly langService = inject(LanguageService);
  readonly authService = inject(AuthService);
  readonly t = this.langService.t;

  // Active form tab
  readonly activeTab = signal<'login' | 'register'>('login');

  // Login form model
  loginForm = {
    email: '',
    password: ''
  };
  loginError = signal<string | null>(null);
  isLoggingIn = signal(false);
  isGoogleLoggingIn = signal(false);

  // Register form model (only Nome, Cognome, Email, Password)
  registerForm = {
    fullName: '',
    email: '',
    password: ''
  };
  registerError = signal<string | null>(null);
  registerSuccess = signal<string | null>(null);
  isRegistering = signal(false);

  // Forgot password
  isForgotOpen = signal(false);
  forgotEmail = signal('');
  forgotMsg = signal<string | null>(null);
  forgotError = signal<string | null>(null);

  // Document Library Filters
  readonly profileFilter = signal<string>('all');
  readonly typeFilter = signal<string>('all');
  readonly searchQuery = signal<string>('');

  // Document Database
  readonly documents: TechDocument[] = [
    {
      id: 'doc-1',
      title: 'Scheda Tecnica AIRWOOD 25-4',
      category: 'datasheet',
      categoryLabel: 'Schede tecniche',
      profile: '25-4',
      revision: 'Bozza Rev. 1',
      date: 'Ottobre 2026',
      format: 'PDF',
      size: '7.1 MB',
      status: 'draft',
      url: '/assets/technical/datasheets/AIRWOOD_25-4_Scheda_tecnica.pdf'
    },
    {
      id: 'doc-2',
      title: 'Scheda Tecnica AIRWOOD 25-7',
      category: 'datasheet',
      categoryLabel: 'Schede tecniche',
      profile: '25-7',
      revision: 'Bozza Rev. 1',
      date: 'Ottobre 2026',
      format: 'PDF',
      size: '1.7 MB',
      status: 'draft',
      url: '/assets/technical/datasheets/AIRWOOD_25-7_Scheda_tecnica.pdf'
    },
    {
      id: 'doc-3',
      title: 'Scheda Tecnica AIRWOOD 25-10',
      category: 'datasheet',
      categoryLabel: 'Schede tecniche',
      profile: '25-10',
      revision: 'Bozza Rev. 1',
      date: 'Ottobre 2026',
      format: 'PDF',
      size: '1.7 MB',
      status: 'draft',
      url: '/assets/technical/datasheets/AIRWOOD_25-10_Scheda_tecnica.pdf'
    },
    {
      id: 'doc-4',
      title: 'Scheda Tecnica AIRWOOD 25-MIX',
      category: 'datasheet',
      categoryLabel: 'Schede tecniche',
      profile: '25-MIX',
      revision: 'Bozza Rev. 1',
      date: 'Ottobre 2026',
      format: 'PDF',
      size: '1.7 MB',
      status: 'draft',
      url: '/assets/technical/datasheets/AIRWOOD_25-MIX_Scheda_tecnica.pdf'
    },
    {
      id: 'doc-5',
      title: 'Istruzioni di Montaggio AIRWOOD 25-MIX',
      category: 'installation',
      categoryLabel: 'Istruzioni di posa',
      profile: '25-MIX',
      revision: 'Rev. 8 (28 pagine con scheda materiali)',
      date: '12/10/2026',
      format: 'PDF',
      size: '5.7 MB',
      status: 'available',
      url: '/assets/technical/manuals/AIRWOOD_25-MIX_Istruzioni_di_montaggio_Rev8.pdf'
    },
    {
      id: 'doc-6',
      title: 'Istruzioni di Posa e Montaggio Sistema AIR (25-4, 25-7, 25-10)',
      category: 'installation',
      categoryLabel: 'Istruzioni di posa',
      profile: 'all',
      revision: 'Rev. 1',
      date: 'In arrivo',
      format: 'PDF',
      status: 'coming_soon'
    },
    {
      id: 'doc-7',
      title: 'Voci di Capitolato Tecnico Rivestimento AIRWOOD',
      category: 'specs',
      categoryLabel: 'Capitolati',
      profile: 'all',
      revision: 'Rev. 2026',
      date: 'In arrivo',
      format: 'DOCX / PDF',
      status: 'coming_soon'
    },
    {
      id: 'doc-8',
      title: 'Dichiarazione di Prestazione DoP FORTE 2021/01 Rev. 1',
      category: 'declaration',
      categoryLabel: 'Dichiarazioni',
      profile: 'all',
      revision: 'Rev. 1 · Reg. UE 305/2011',
      date: '2026',
      format: 'PDF',
      status: 'coming_soon'
    },
    {
      id: 'doc-9',
      title: 'Dettagli Costruttivi Nodi di Facciata Ventilata',
      category: 'cad',
      categoryLabel: 'Disegni DWG / PDF',
      profile: 'all',
      revision: 'Release 2026.1',
      date: 'In arrivo',
      format: 'DWG / PDF',
      status: 'coming_soon'
    }
  ];

  // Filtered documents list computed signal
  readonly filteredDocuments = computed(() => {
    const prof = this.profileFilter();
    const typ = this.typeFilter();
    const query = this.searchQuery().toLowerCase().trim();

    return this.documents.filter(doc => {
      const matchProfile = prof === 'all' || doc.profile === prof || doc.profile === 'all';
      const matchType = typ === 'all' || doc.category === typ;
      const matchQuery =
        !query ||
        doc.title.toLowerCase().includes(query) ||
        doc.categoryLabel.toLowerCase().includes(query) ||
        doc.revision.toLowerCase().includes(query);

      return matchProfile && matchType && matchQuery;
    });
  });

  async onGoogleLogin(): Promise<void> {
    this.loginError.set(null);
    this.registerError.set(null);
    this.isGoogleLoggingIn.set(true);

    try {
      await this.authService.loginWithGoogle();
    } catch (e: any) {
      console.error('Google login error:', e);
      if (e.code !== 'auth/popup-closed-by-user') {
        this.loginError.set('Accesso con Google non riuscito. Verifica la connessione o riprova.');
      }
    } finally {
      this.isGoogleLoggingIn.set(false);
    }
  }

  async onLogin(): Promise<void> {
    if (!this.loginForm.email || !this.loginForm.password) return;
    this.isLoggingIn.set(true);
    this.loginError.set(null);

    try {
      await this.authService.login(this.loginForm.email, this.loginForm.password);
    } catch (e: any) {
      console.error(e);
      this.loginError.set('Credenziali non valide o utente non trovato. Verifica email e password.');
    } finally {
      this.isLoggingIn.set(false);
    }
  }

  async onRegister(): Promise<void> {
    if (!this.registerForm.email || !this.registerForm.password || !this.registerForm.fullName) {
      return;
    }
    this.isRegistering.set(true);
    this.registerError.set(null);
    this.registerSuccess.set(null);

    try {
      await this.authService.register(
        this.registerForm.email,
        this.registerForm.password,
        this.registerForm.fullName
      );
    } catch (e: any) {
      console.error(e);
      this.registerError.set('Errore durante la registrazione: ' + (e.message || 'Riprova più tardi.'));
    } finally {
      this.isRegistering.set(false);
    }
  }

  async onLogout(): Promise<void> {
    await this.authService.logout();
  }

  openForgotModal(): void {
    this.forgotEmail.set(this.loginForm.email);
    this.forgotMsg.set(null);
    this.forgotError.set(null);
    this.isForgotOpen.set(true);
  }

  closeForgotModal(): void {
    this.isForgotOpen.set(false);
  }

  async sendReset(): Promise<void> {
    if (!this.forgotEmail()) return;
    this.forgotMsg.set(null);
    this.forgotError.set(null);
    try {
      await this.authService.resetPassword(this.forgotEmail());
      this.forgotMsg.set('Email di recupero inviata! Controlla la tua casella di posta.');
    } catch (e: any) {
      this.forgotError.set('Impossibile inviare l’email di recupero: ' + (e.message || 'Verifica l’indirizzo.'));
    }
  }
}
