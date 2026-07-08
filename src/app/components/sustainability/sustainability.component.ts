import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sustainability',
  imports: [],
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.scss'
})
export class SustainabilityComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
