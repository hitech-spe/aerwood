import { Component, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;

  // Encapsulated state for contact form
  readonly contactName = signal('');
  readonly contactEmail = signal('');
  readonly contactMessage = signal('');
  readonly contactStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  onFieldChange(field: 'name' | 'email' | 'message', event: Event): void {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (field === 'name') this.contactName.set(input.value);
    if (field === 'email') this.contactEmail.set(input.value);
    if (field === 'message') this.contactMessage.set(input.value);
  }

  submitContactForm(event: Event): void {
    event.preventDefault();
    
    if (!this.contactName().trim() || !this.contactEmail().trim() || !this.contactMessage().trim()) {
      this.contactStatus.set('error');
      return;
    }

    this.contactStatus.set('sending');

    // Simulate API submission
    setTimeout(() => {
      this.contactStatus.set('success');
      // Reset fields
      this.contactName.set('');
      this.contactEmail.set('');
      this.contactMessage.set('');
      
      // Reset feedback status after a few seconds
      setTimeout(() => {
        this.contactStatus.set('idle');
      }, 5000);
    }, 1500);
  }
}
