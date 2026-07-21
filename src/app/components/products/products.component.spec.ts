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
    expect(component.activeFinishCard1()).toBe('original');
    expect(component.activeFinishCard2()).toBe('original');
    expect(component.isModalOpen()).toBe(false);
  });

  it('should select finish correctly', () => {
    component.selectFinish(1, 'sand');
    expect(component.activeFinishCard1()).toBe('sand');
    expect(component.activeFinishCard2()).toBe('original');

    component.selectFinish(2, 'charcoal');
    expect(component.activeFinishCard1()).toBe('sand');
    expect(component.activeFinishCard2()).toBe('charcoal');
  });

  it('should open image modal with correct details', () => {
    component.openImageModal('Test Product', 'bg.jpg', 'panel.png', 'filter-white');
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('Test Product');
    expect(component.modalBgImage()).toBe('bg.jpg');
    expect(component.modalPanelImage()).toBe('panel.png');
    expect(component.modalFilterClass()).toBe('filter-white');
  });

  it('should close image modal', () => {
    component.openImageModal('Test', 'bg.jpg', 'panel.png', 'filter-white');
    expect(component.isModalOpen()).toBe(true);

    component.closeImageModal();
    expect(component.isModalOpen()).toBe(false);
  });

  it('should open card modal for card 1 with active finish', () => {
    component.selectFinish(1, 'honey');
    component.openCardModal(1);
    
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('AeroShield');
    expect(component.modalBgImage()).toBe('/assets/pannello1.jpeg');
    expect(component.modalPanelImage()).toBe('/assets/pannello1.webp');
    expect(component.modalFilterClass()).toBe('filter-honey');
  });

  it('should open card modal for card 2 with active finish', () => {
    component.selectFinish(2, 'charcoal');
    component.openCardModal(2);
    
    expect(component.isModalOpen()).toBe(true);
    expect(component.modalTitle()).toBe('AeroSlat');
    expect(component.modalBgImage()).toBe('/assets/pannello2.jpeg');
    expect(component.modalPanelImage()).toBe('/assets/pannello2.webp');
    expect(component.modalFilterClass()).toBe('filter-charcoal');
  });

  it('should close modal on Escape key press', () => {
    component.openCardModal(1);
    expect(component.isModalOpen()).toBe(true);

    component.onEscapeKey();
    expect(component.isModalOpen()).toBe(false);
  });
});
