import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
  readonly currentLang = this.langService.currentLanguage;

  // Track state of the mobile menu
  readonly isMenuOpen = signal(false);

  setLanguage(lang: 'it' | 'en'): void {
    this.langService.setLanguage(lang);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
