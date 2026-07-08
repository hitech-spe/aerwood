import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
  readonly currentLang = this.langService.currentLanguage;

  setLanguage(lang: 'it' | 'en'): void {
    this.langService.setLanguage(lang);
  }
}
