import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';
import { LanguageService } from './services/language.service';

describe('App', () => {
  let langService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [LanguageService]
    }).compileComponents();

    langService = TestBed.inject(LanguageService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render localized title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Trigger change detection
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Default language is IT, so title should match the Italian version
    const expectedTitle = langService.t().hero.title;
    expect(compiled.querySelector('h1')?.textContent?.trim()).toBe(expectedTitle);
  });
});
