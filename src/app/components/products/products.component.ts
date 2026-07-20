import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface FinishOption {
  id: string;
  nameKey: 'teak' | 'walnut' | 'oak' | 'charcoal' | 'stone';
  hex: string;
}

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  readonly langService = inject(LanguageService);
  readonly t = this.langService.t;

  // Independent state for each product card
  readonly activeFinishCard1 = signal<string>('original');
  readonly activeFinishCard2 = signal<string>('original');

  // Premium wood finishes aligned with our general color palette
  readonly finishes: FinishOption[] = [
    { id: 'teak', nameKey: 'teak', hex: '#D4A359' },
    { id: 'walnut', nameKey: 'walnut', hex: '#8A6546' },
    { id: 'oak', nameKey: 'oak', hex: '#DDBB8E' },
    { id: 'charcoal', nameKey: 'charcoal', hex: '#2E2F31' },
    { id: 'stone', nameKey: 'stone', hex: '#7F8C8D' }
  ];

  selectFinish(card: 1 | 2, finishId: string): void {
    if (card === 1) {
      this.activeFinishCard1.set(finishId);
    } else {
      this.activeFinishCard2.set(finishId);
    }
  }
}
