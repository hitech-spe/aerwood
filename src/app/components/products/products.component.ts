import { Component, inject, signal, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface FinishOption {
  id: string;
  nameKey: 'white' | 'sand' | 'pearlGrey' | 'honey' | 'avorico' | 'charcoal' | 'coffee';
  hex: string;
  code: string;
}

@Component({
    selector: 'app-products',
    imports: [],
    templateUrl: './products.component.html',
    standalone: true,
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
  readonly currentModalCard = signal<1 | 2 | null>(null);
  readonly modalTitle = signal<string>('');
  readonly modalBgImage = signal<string>('');
  readonly modalPanelImage = signal<string>('');
  readonly modalFilterClass = signal<string>('');

  // Premium wood finishes aligned with our general color palette and technical architectural codes
  readonly finishes: FinishOption[] = [
    { id: 'white', nameKey: 'white', hex: '#F8F9FA', code: 'AW-9010' },
    { id: 'sand', nameKey: 'sand', hex: '#E5C39E', code: 'AW-1015' },
    { id: 'pearlGrey', nameKey: 'pearlGrey', hex: '#D1D5DB', code: 'AW-7040' },
    { id: 'honey', nameKey: 'honey', hex: '#E59F3C', code: 'AW-8001' },
    { id: 'avorico', nameKey: 'avorico', hex: '#F4EBE1', code: 'AW-1013' },
    { id: 'charcoal', nameKey: 'charcoal', hex: '#2E2F31', code: 'AW-7021' },
    { id: 'coffee', nameKey: 'coffee', hex: '#4B382A', code: 'AW-8017' }
  ];

  getFinishDetails(finishId: string): FinishOption | null {
    return this.finishes.find(f => f.id === finishId) || null;
  }

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

  selectFinishInModal(finishId: string): void {
    const card = this.currentModalCard();
    if (card) {
      this.selectFinish(card, finishId);
      this.modalFilterClass.set('filter-' + finishId);
    }
  }

  getActiveFinishInModal(): string {
    const card = this.currentModalCard();
    if (card === 1) return this.activeFinishCard1();
    if (card === 2) return this.activeFinishCard2();
    return 'original';
  }

  openCardModal(cardNum: 1 | 2): void {
    this.currentModalCard.set(cardNum);
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
