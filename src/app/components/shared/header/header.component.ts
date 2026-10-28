import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
  readonly currentLang = this.langService.currentLanguage;

  readonly isMenuOpen = signal(false);

  setLanguage(lang: 'it' | 'en'): void {
    this.langService.setLanguage(lang);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    if (typeof document !== 'undefined') {
      if (this.isMenuOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}
