import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-technical',
  standalone: true,
  imports: [],
  templateUrl: './technical.component.html',
  styleUrl: './technical.component.scss'
})
export class TechnicalComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
