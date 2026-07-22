import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    standalone: true,
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;
}
