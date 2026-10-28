import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

export interface FinishSwatch {
  name: string;
  code: string;
  hex: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;

  // Active finish per profile
  readonly activeFinish = signal<Record<string, string>>({
    '25-4': '402',
    '25-7': '405',
    '25-10': '400',
    '25-mix': '402'
  });

  // Finish list with official catalogue codes
  readonly standardFinishes: FinishSwatch[] = [
    { name: 'Bianco', code: '244', hex: '#F4F3EE' },
    { name: 'Sabbia', code: '400', hex: '#D6C7B2' },
    { name: 'Grigio perla', code: '401', hex: '#B8B7B2' },
    { name: 'Miele', code: '402', hex: '#D19E5B' },
    { name: 'Avorio', code: '403', hex: '#E8DFD0' },
    { name: 'Carbone', code: '405', hex: '#4A4D4F' },
    { name: 'Caffè', code: '406', hex: '#634B3C' }
  ];

  setFinish(profileId: string, code: string): void {
    this.activeFinish.update(current => ({
      ...current,
      [profileId]: code
    }));
  }
}
