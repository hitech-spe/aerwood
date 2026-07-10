import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-ventilated-facade',
  standalone: true,
  imports: [],
  templateUrl: './ventilated-facade.component.html',
  styleUrl: './ventilated-facade.component.scss'
})
export class VentilatedFacadeComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
