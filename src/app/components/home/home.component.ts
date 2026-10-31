import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly langService = inject(LanguageService);
  private leadService = inject(LeadService);
  readonly t = this.langService.t;

  // Selected finish preview
  readonly selectedFinish = signal<number>(3); // Default Miele COD. 402

  // Contact form state
  contactForm = {
    fullName: '',
    company: '',
    email: '',
    role: 'progettista' as 'progettista' | 'posatore' | 'rivenditore' | 'impresa' | 'privato' | 'altro',
    message: '',
    privacyConsent: false,
    honeypot: ''
  };

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  selectFinish(index: number): void {
    this.selectedFinish.set(index);
  }

  async onSubmitContact(): Promise<void> {
    if (!this.contactForm.email || !this.contactForm.privacyConsent) {
      return;
    }

    // Anti-spam honeypot check: silently drop if filled
    if (this.contactForm.honeypot) {
      this.submitSuccess.set(true);
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    try {
      await this.leadService.sendContactRequest({
        fullName: this.contactForm.fullName,
        company: this.contactForm.company,
        email: this.contactForm.email,
        role: this.contactForm.role,
        message: this.contactForm.message,
        privacyConsent: this.contactForm.privacyConsent
      });
      this.submitSuccess.set(true);
      this.contactForm = {
        fullName: '',
        company: '',
        email: '',
        role: 'progettista',
        message: '',
        privacyConsent: false,
        honeypot: ''
      };
    } catch (e) {
      console.error(e);
      this.submitError.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
