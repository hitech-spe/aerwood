import { Component, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-contacts',
    imports: [],
    templateUrl: './contacts.component.html',
    standalone: true,
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
    
    const name = this.contactName().trim();
    const email = this.contactEmail().trim();
    const message = this.contactMessage().trim();

    if (!name || !email || !message) {
      this.contactStatus.set('error');
      return;
    }

    this.contactStatus.set('sending');

    const body = new URLSearchParams({
      'form-name': 'contact',
      'name': name,
      'email': email,
      'message': message
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Netlify form submission failed');
      }
      this.contactStatus.set('success');
      // Reset fields
      this.contactName.set('');
      this.contactEmail.set('');
      this.contactMessage.set('');
      
      // Reset feedback status after a few seconds
      setTimeout(() => {
        this.contactStatus.set('idle');
      }, 5000);
    })
    .catch(error => {
      console.error('Netlify Form Submission Error:', error);
      this.contactStatus.set('error');
    });
  }
}
