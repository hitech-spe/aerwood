import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';
import { ProductsComponent } from './products.component';
import { LanguageService } from '../../services/language.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
      providers: [LanguageService, provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have standard finishes loaded', () => {
    expect(component.standardFinishes.length).toBe(7);
    expect(component.standardFinishes[0].code).toBe('244');
    expect(component.standardFinishes[1].code).toBe('400');
  });

  it('should allow selecting finishes for profiles', () => {
    component.setFinish('25-4', '405');
    expect(component.activeFinish()['25-4']).toBe('405');
  });
});
