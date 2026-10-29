import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly langService = inject(LanguageService);
  readonly authService = inject(AuthService);
  readonly t = this.langService.t;
  readonly currentLang = this.langService.currentLanguage;

  readonly isMenuOpen = signal(false);

  get userInitial(): string {
    const user = this.authService.currentUser();
    if (user?.displayName) {
      return user.displayName.trim().charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.trim().charAt(0).toUpperCase();
    }
    return 'U';
  }

  get userDisplayName(): string {
    const user = this.authService.currentUser();
    return user?.displayName || user?.email?.split('@')[0] || 'Utente';
  }

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
