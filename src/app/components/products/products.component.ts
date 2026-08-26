import { Component, inject, signal, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface FinishOption {
  id: string;
  nameKey: 'white' | 'sand' | 'pearlGrey' | 'honey' | 'avorio' | 'charcoal' | 'coffee';
  hex: string;
  code: string;
  // Le mantengo nel caso tu voglia integrarle nell'HTML in futuro
  baseFilter?: string;
  specularFilter?: string;
  blendMode?: string;
  overlayOpacity?: string;
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
  readonly activeFinishCard1 = signal<string>('white');
  readonly activeFinishCard2 = signal<string>('white');
  readonly activeFinishCard3 = signal<string>('white');
  readonly activeFinishCard4 = signal<string>('white');

  // Toggle state between profile and render view for Cards 1, 2, 3, and 4
  readonly activeViewCard1 = signal<'profile' | 'render'>('profile');
  readonly activeViewCard2 = signal<'profile' | 'render'>('profile');
  readonly activeViewCard3 = signal<'profile' | 'render'>('profile');
  readonly activeViewCard4 = signal<'profile' | 'render'>('profile');
  readonly activeModalView = signal<'profile' | 'render'>('profile');

  // Modal State
  readonly isModalOpen = signal<boolean>(false);
  readonly currentModalCard = signal<1 | 2 | 3 | 4 | null>(null);
  readonly modalTitle = signal<string>('');
  readonly modalPanelImage = signal<string>('');

  // Premium wood finishes
  readonly finishes: FinishOption[] = [
    { id: 'white', nameKey: 'white', hex: '#FFFFFF', code: 'AW-9010', baseFilter: 'grayscale(100%) brightness(1.4) contrast(1.1)', specularFilter: 'grayscale(100%) brightness(0.15) opacity(0.15)', blendMode: 'color', overlayOpacity: '0.9' },
    { id: 'sand', nameKey: 'sand', hex: '#C2B280', code: 'AW-1015', baseFilter: 'grayscale(100%) brightness(1.2) contrast(1.1)', specularFilter: 'grayscale(100%) brightness(0.2) opacity(0.2)', blendMode: 'color', overlayOpacity: '0.95' },
    { id: 'pearlGrey', nameKey: 'pearlGrey', hex: '#E4E5E0', code: 'AW-7040', baseFilter: 'grayscale(100%) brightness(1.25) contrast(1.1)', specularFilter: 'grayscale(100%) brightness(0.2) opacity(0.2)', blendMode: 'color', overlayOpacity: '0.95' },
    { id: 'honey', nameKey: 'honey', hex: '#E3A857', code: 'AW-8001', baseFilter: 'grayscale(100%) brightness(1.15) contrast(1.15)', specularFilter: 'grayscale(100%) brightness(0.2) opacity(0.25)', blendMode: 'color', overlayOpacity: '0.95' },
    { id: 'avorico', nameKey: 'avorio', hex: '#FFFFF0', code: 'AW-1013', baseFilter: 'grayscale(100%) brightness(1.35) contrast(1.1)', specularFilter: 'grayscale(100%) brightness(0.15) opacity(0.15)', blendMode: 'color', overlayOpacity: '0.95' },
    { id: 'charcoal', nameKey: 'charcoal', hex: '#36454F', code: 'AW-7021', baseFilter: 'grayscale(100%) brightness(1.2) contrast(1.4)', specularFilter: 'grayscale(100%) brightness(0.25) opacity(0.25)', blendMode: 'multiply', overlayOpacity: '0.9' },
    { id: 'coffee', nameKey: 'coffee', hex: '#4E3629', code: 'AW-8017', baseFilter: 'grayscale(100%) brightness(1.15) contrast(1.35)', specularFilter: 'grayscale(100%) brightness(0.25) opacity(0.25)', blendMode: 'multiply', overlayOpacity: '0.9' }
  ];

  getFinishDetails(finishId: string): FinishOption | null {
    return this.finishes.find(f => f.id === finishId) || null;
  }

  getBaseFilterForCard(cardNum: number, finishId: string): string {
    const finish = this.getFinishDetails(finishId);
    if (!finish) return '';
    
    // If it is Card 2, boost the base brightness & contrast gently for light colors to avoid "burning" (clipping highlights)
    if (cardNum === 2) {
      if (finishId === 'white') {
        return 'grayscale(100%) brightness(2.05) contrast(1.05)';
      }
      if (finishId === 'avorico') {
        return 'grayscale(100%) brightness(1.7) contrast(1.0)';
      }
      if (finishId === 'sand') {
        return 'grayscale(100%) brightness(1.45) contrast(1.05)';
      }
      if (finishId === 'pearlGrey') {
        return 'grayscale(100%) brightness(1.5) contrast(1.05)';
      }
      if (finishId === 'honey') {
        return 'grayscale(100%) brightness(1.35) contrast(1.05)';
      }
    }
    return finish.baseFilter || '';
  }

  getCardRenderImage(cardNum: number, finishId: string): string {
    const renderMap: Record<string, string> = {
      'white': 'render-bianco.jpg',
      'sand': 'render-sabbia.jpg',
      'pearlGrey': 'render-grigioPerla.jpg',
      'honey': 'render-miele.jpg',
      'avorico': 'render-avorio.jpg',
      'charcoal': 'render-carbone.jpg',
      'coffee': 'render-caffe.jpg'
    };
    const filename = renderMap[finishId] || 'render-bianco.jpg';
    return `/assets/pannello${cardNum}/${filename}`;
  }

  selectFinish(card: 1 | 2 | 3 | 4, finishId: string): void {
    if (card === 1) this.activeFinishCard1.set(finishId);
    else if (card === 2) this.activeFinishCard2.set(finishId);
    else if (card === 3) this.activeFinishCard3.set(finishId);
    else if (card === 4) this.activeFinishCard4.set(finishId);
  }

  openImageModal(title: string, panelImg: string): void {
    this.modalTitle.set(title);
    this.modalPanelImage.set(panelImg);
    this.isModalOpen.set(true);

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeImageModal(): void {
    this.isModalOpen.set(false);

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
    }
  }

  getActiveFinishInModal(): string {
    const card = this.currentModalCard();
    if (card === 1) return this.activeFinishCard1();
    if (card === 2) return this.activeFinishCard2();
    if (card === 3) return this.activeFinishCard3();
    if (card === 4) return this.activeFinishCard4();
    return this.finishes[0]?.id || 'white';
  }

  openCardModal(cardNum: 1 | 2 | 3 | 4): void {
    this.currentModalCard.set(cardNum);
    if (cardNum === 1) {
      // Synchronize modal view with Card 1's active view
      this.activeModalView.set(this.activeViewCard1());
      this.openImageModal('AeroShield', '/assets/pannello1/pannello1.webp');
    } else if (cardNum === 2) {
      // Synchronize modal view with Card 2's active view
      this.activeModalView.set(this.activeViewCard2());
      this.openImageModal('AeroSlat', '/assets/pannello2/pannello2.webp');
    } else if (cardNum === 3) {
      // Synchronize modal view with Card 3's active view
      this.activeModalView.set(this.activeViewCard3());
      this.openImageModal('AeroDeck', '/assets/pannello3/pannello3.webp');
    } else if (cardNum === 4) {
      // Synchronize modal view with Card 4's active view
      this.activeModalView.set(this.activeViewCard4());
      this.openImageModal('AeroLouvre', '/assets/pannello4/pannello4.webp');
    }
  }
}