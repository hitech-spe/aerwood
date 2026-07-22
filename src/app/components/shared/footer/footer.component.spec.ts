import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';
import { FooterComponent } from './footer.component';
import { LanguageService } from '../../../services/language.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let langService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [
        LanguageService,
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    langService = TestBed.inject(LanguageService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the developer credit with correct link and target', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const developerLink = compiled.querySelector('.footer-developer a') as HTMLAnchorElement;
    
    expect(developerLink).toBeTruthy();
    expect(developerLink.getAttribute('href')).toBe('https://hitechsrls.com/');
    expect(developerLink.getAttribute('target')).toBe('_blank');
    expect(developerLink.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should render the developer logo with correct source and alt', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const developerLogo = compiled.querySelector('.footer-developer img') as HTMLImageElement;
    
    expect(developerLogo).toBeTruthy();
    expect(developerLogo.getAttribute('src')).toBe('/assets/logo-trasp.png');
    expect(developerLogo.getAttribute('alt')).toBe('Hitech S.r.l.s. Logo');
  });

  it('should render the localized "Developed by" label', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const developerSpan = compiled.querySelector('.footer-developer span') as HTMLSpanElement;
    
    expect(developerSpan).toBeTruthy();
    expect(developerSpan.textContent).toContain(langService.t().footer.developedBy);
  });
});
