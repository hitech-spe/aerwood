import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
