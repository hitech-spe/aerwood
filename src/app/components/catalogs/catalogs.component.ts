import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-catalogs',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './catalogs.component.html',
  styleUrl: './catalogs.component.scss'
})
export class CatalogsComponent {
  readonly langService = inject(LanguageService);
  private leadService = inject(LeadService);
  readonly t = this.langService.t;

  // Lead modal state
  readonly isModalOpen = signal(false);
  readonly currentDownloadType = signal<'catalogo_generale_2026' | 'cartella_colori'>('catalogo_generale_2026');
  
  leadForm = {
    email: '',
    privacyConsent: false
  };

  isSubmitting = signal(false);
  isSuccess = signal(false);

  openDownloadModal(type: 'catalogo_generale_2026' | 'cartella_colori'): void {
    this.currentDownloadType.set(type);
    this.leadForm = { email: '', privacyConsent: false };
    this.isSuccess.set(false);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  async onSubmitLead(): Promise<void> {
    if (!this.leadForm.email || !this.leadForm.privacyConsent) return;
    this.isSubmitting.set(true);

    try {
      await this.leadService.saveCatalogDownload(this.leadForm.email, this.currentDownloadType());
      this.isSuccess.set(true);

      // Trigger download
      setTimeout(() => {
        const link = document.createElement('a');
        if (this.currentDownloadType() === 'catalogo_generale_2026') {
          link.href = '/assets/technical/manuals/AIRWOOD_25-MIX_Istruzioni_di_montaggio_Rev8.pdf';
          link.download = 'AIRWOOD_Catalogo_2026.pdf';
        } else {
          link.href = '/assets/technical/manuals/AIRWOOD_25-MIX_Istruzioni_di_montaggio_Rev8.pdf';
          link.download = 'AIRWOOD_Cartella_Colori.pdf';
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 700);

      setTimeout(() => {
        this.closeModal();
      }, 2500);
    } catch (e) {
      console.error('Error saving lead:', e);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
