import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-why-wpc',
  standalone: true,
  imports: [],
  templateUrl: './why-wpc.component.html',
  styleUrl: './why-wpc.component.scss'
})
export class WhyWpcComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
