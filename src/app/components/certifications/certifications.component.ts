import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
