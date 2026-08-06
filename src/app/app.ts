import { Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { filter } from 'rxjs';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);

  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 800, // standard animation duration
        once: true,     // whether animation should happen only once - while scrolling down
        mirror: false,   // whether elements should animate out while scrolling past them
        offset: 50,     // offset (in px) from the original trigger point
        easing: 'ease-out-cubic', // default easing for AOS animations
      });

      // Listen to navigation events to refresh AOS for newly routed views
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      });
    });
  }
}
