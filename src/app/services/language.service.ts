import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Translations } from '../i18n/translation.interface';
import { itTranslations } from '../i18n/it';
import { enTranslations } from '../i18n/en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  
  // Manage language state as an Angular Signal ('it' | 'en')
  private readonly activeLanguage = signal<'it' | 'en'>('it');

  constructor() {
    // Safely hydrate from localStorage on the client side
    if (isPlatformBrowser(this.platformId)) {
      try {
        const savedLang = localStorage.getItem('airwood_lang');
        if (savedLang === 'it' || savedLang === 'en') {
          this.activeLanguage.set(savedLang);
        } else {
          // Default to 'it' or browser language
          const browserLang = navigator.language.slice(0, 2);
          if (browserLang === 'en' || browserLang === 'it') {
            this.activeLanguage.set(browserLang as 'it' | 'en');
          }
        }
      } catch (e) {
        console.warn('Could not read from localStorage', e);
      }
    }
  }

  // Expose language as a read-only signal
  readonly currentLanguage = this.activeLanguage.asReadonly();

  // Reactive computed signal returning the correct translation dictionary
  readonly t = computed<Translations>(() => {
    return this.activeLanguage() === 'it' ? itTranslations : enTranslations;
  });

  /**
   * Set the active language and persist to localStorage if on browser
   */
  setLanguage(lang: 'it' | 'en'): void {
    this.activeLanguage.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('airwood_lang', lang);
      } catch (e) {
        console.warn('Could not write to localStorage', e);
      }
    }
  }
}
