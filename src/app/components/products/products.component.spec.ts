import { TestBed, ComponentFixture } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { ProductsComponent } from './products.component';
import { LanguageService } from '../../services/language.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let langService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
      providers: [LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    langService = TestBed.inject(LanguageService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default states', () => {
    expect(component.activeFinishCard1()).toBe('white');
    expect(component.activeFinishCard2()).toBe('white');
    expect(component.activeFinishCard3()).toBe('white');
    expect(component.activeFinishCard4()).toBe('white');
    expect(component.isModalOpen()).toBe(false);
  });

  it('should select finish correctly', () => {
    component.selectFinish(1, 'sand');
    expect(component.activeFinishCard1()).toBe('sand');
    expect(component.activeFinishCard2()).toBe('white');
    expect(component.activeFinishCard3()).toBe('white');
    expect(component.activeFinishCard4()).toBe('white');

    component.selectFinish(2, 'charcoal');
    expect(component.activeFinishCard1()).toBe('sand');
    expect(component.activeFinishCard2()).toBe('charcoal');
    expect(component.activeFinishCard3()).toBe('white');
    expect(component.activeFinishCard4()).toBe('white');

    component.selectFinish(3, 'white');
    expect(component.activeFinishCard1()).toBe('sand');
    expect(component.activeFinishCard2()).toBe('charcoal');
    expect(component.activeFinishCard3()).toBe('white');
    expect(component.activeFinishCard4()).toBe('white');

    component.selectFinish(4, 'honey');
    expect(component.activeFinishCard1()).toBe('sand');
    expect(component.activeFinishCard2()).toBe('charcoal');
    expect(component.activeFinishCard3()).toBe('white');
    expect(component.activeFinishCard4()).toBe('honey');
  });

  it('should open image modal with correct details', () => {
    component.openImageModal('Test Product', 'panel.png');
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('Test Product');
    expect(component.modalPanelImage()).toBe('panel.png');
  });

  it('should close image modal', () => {
    component.openImageModal('Test', 'panel.png');
    expect(component.isModalOpen()).toBe(true);

    component.closeImageModal();
    expect(component.isModalOpen()).toBe(false);
  });

  it('should open card modal for card 1 with active finish', () => {
    component.selectFinish(1, 'honey');
    component.openCardModal(1);
    
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('AeroShield');
    expect(component.modalPanelImage()).toBe('/assets/pannello1/pannello1.webp');
    expect(component.activeFinishCard1()).toBe('honey');
  });

  it('should open card modal for card 2 with active finish', () => {
    component.selectFinish(2, 'charcoal');
    component.openCardModal(2);
    
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('AeroSlat');
    expect(component.modalPanelImage()).toBe('/assets/pannello2/pannello2.webp');
    expect(component.activeFinishCard2()).toBe('charcoal');
  });

  it('should open card modal for card 3 with active finish', () => {
    component.selectFinish(3, 'white');
    component.openCardModal(3);
    
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('AeroDeck');
    expect(component.modalPanelImage()).toBe('/assets/pannello3.webp');
    expect(component.activeFinishCard3()).toBe('white');
  });

  it('should open card modal for card 4 with active finish', () => {
    component.selectFinish(4, 'sand');
    component.openCardModal(4);
    
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('AeroLouvre');
    expect(component.modalPanelImage()).toBe('/assets/pannello4.webp');
    expect(component.activeFinishCard4()).toBe('sand');
  });

  it('should close modal on Escape key press', () => {
    component.openCardModal(1);
    expect(component.isModalOpen()).toBe(true);

    component.onEscapeKey();
    expect(component.isModalOpen()).toBe(false);
  });

  it('should allow changing finish within the modal', () => {
    component.openCardModal(1);
    expect(component.isModalOpen()).toBe(true);
    expect(component.getActiveFinishInModal()).toBe('white');

    component.selectFinishInModal('sand');
    expect(component.getActiveFinishInModal()).toBe('sand');
    expect(component.activeFinishCard1()).toBe('sand');
  });

  it('should toggle view state for card 1', () => {
    expect(component.activeViewCard1()).toBe('profile');
    component.activeViewCard1.set('render');
    expect(component.activeViewCard1()).toBe('render');
  });

  it('should toggle view state for card 2', () => {
    expect(component.activeViewCard2()).toBe('profile');
    component.activeViewCard2.set('render');
    expect(component.activeViewCard2()).toBe('render');
  });

  it('should toggle view state inside the modal for card 1', () => {
    component.openCardModal(1);
    expect(component.activeModalView()).toBe('profile');
    component.activeModalView.set('render');
    expect(component.activeModalView()).toBe('render');
  });

  it('should toggle view state inside the modal for card 2', () => {
    component.openCardModal(2);
    expect(component.activeModalView()).toBe('profile');
    component.activeModalView.set('render');
    expect(component.activeModalView()).toBe('render');
  });
});
