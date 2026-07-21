import { Component, inject, signal, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface FinishOption {
  id: string;
  nameKey: 'white' | 'sand' | 'pearlGrey' | 'honey' | 'avorico' | 'charcoal' | 'coffee';
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

  // Modal State
  readonly isModalOpen = signal<boolean>(false);
  readonly modalTitle = signal<string>('');
  readonly modalBgImage = signal<string>('');
  readonly modalPanelImage = signal<string>('');
  readonly modalFilterClass = signal<string>('');

  // Premium wood finishes aligned with our general color palette
  readonly finishes: FinishOption[] = [
    { id: 'white', nameKey: 'white', hex: '#F8F9FA' },
    { id: 'sand', nameKey: 'sand', hex: '#E5C39E' },
    { id: 'pearlGrey', nameKey: 'pearlGrey', hex: '#D1D5DB' },
    { id: 'honey', nameKey: 'honey', hex: '#E59F3C' },
    { id: 'avorico', nameKey: 'avorico', hex: '#F4EBE1' },
    { id: 'charcoal', nameKey: 'charcoal', hex: '#2E2F31' },
    { id: 'coffee', nameKey: 'coffee', hex: '#4B382A' }
  ];

  selectFinish(card: 1 | 2, finishId: string): void {
    if (card === 1) {
      this.activeFinishCard1.set(finishId);
    } else {
      this.activeFinishCard2.set(finishId);
    }
  }

  openImageModal(title: string, bgImg: string, panelImg: string, filterClass: string): void {
    this.modalTitle.set(title);
    this.modalBgImage.set(bgImg);
    this.modalPanelImage.set(panelImg);
    this.modalFilterClass.set(filterClass);
    this.isModalOpen.set(true);
    // Disable body scroll when modal is open (SSR safe check)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeImageModal(): void {
    this.isModalOpen.set(false);
    // Restore body scroll (SSR safe check)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen()) {
      this.closeImageModal();
    }
  }

  openCardModal(cardNum: 1 | 2): void {
    if (cardNum === 1) {
      const title = 'AeroShield';
      this.openImageModal(
        title,
        '/assets/pannello1.jpeg',
        '/assets/pannello1.webp',
        'filter-' + this.activeFinishCard1()
      );
    } else {
      const title = 'AeroSlat';
      this.openImageModal(
        title,
        '/assets/pannello2.jpeg',
        '/assets/pannello2.webp',
        'filter-' + this.activeFinishCard2()
      );
    }
  }
}
