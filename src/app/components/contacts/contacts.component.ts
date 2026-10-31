import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { LeadService, ContactLead } from '../../services/lead.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  readonly langService = inject(LanguageService);
  private leadService = inject(LeadService);
  readonly t = this.langService.t;

  formModel: ContactLead = {
    fullName: '',
    company: '',
    email: '',
    role: 'progettista',
    message: '',
    privacyConsent: false,
    honeypot: ''
  };

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  async onSubmit(): Promise<void> {
    if (!this.formModel.fullName || !this.formModel.email || !this.formModel.privacyConsent) {
      return;
    }

    // Anti-spam honeypot check: silently drop if filled
    if (this.formModel.honeypot) {
      this.submitSuccess.set(true);
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    try {
      await this.leadService.sendContactRequest({ ...this.formModel });
      this.submitSuccess.set(true);
      this.formModel = {
        fullName: '',
        company: '',
        email: '',
        role: 'progettista',
        message: '',
        privacyConsent: false,
        honeypot: ''
      };
    } catch (e) {
      console.error('Contact submission error:', e);
      this.submitError.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
