import { TestBed, ComponentFixture } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { MapComponent } from './map.component';
import { LanguageService } from '../../services/language.service';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let langService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponent],
      providers: [
        LanguageService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    langService = TestBed.inject(LanguageService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the google maps iframe with the correct src address query', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const iframe = compiled.querySelector('.map-wrapper iframe') as HTMLIFrameElement;
    
    expect(iframe).toBeTruthy();
    expect(iframe.getAttribute('src')).toContain('Forte%20S.r.l.,%20Contrada%20Parco%20del%20Vecchio%20Bovio');
  });

  it('should render the external google maps button with correct href and target', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linkButton = compiled.querySelector('.map-footer a') as HTMLAnchorElement;
    
    expect(linkButton).toBeTruthy();
    expect(linkButton.getAttribute('href')).toContain('Forte+S.r.l.,+Contrada+Parco+del+Vecchio+Bovio');
    expect(linkButton.getAttribute('target')).toBe('_blank');
    expect(linkButton.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should display the translated title and badge text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const badge = compiled.querySelector('.badge') as HTMLSpanElement;
    const title = compiled.querySelector('.section-title') as HTMLHeadingElement;
    
    expect(badge).toBeTruthy();
    expect(badge.textContent?.trim()).toBe(langService.t().map.badge);
    
    expect(title).toBeTruthy();
    expect(title.textContent?.trim()).toBe(langService.t().map.title);
  });
});
