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
        duration: 800,
        once: true,
        mirror: false,
        offset: 50,
        easing: 'ease-out-cubic'
      });

      // Listen to navigation events to refresh AOS and scroll to top for multi-page routing
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      });
    });
  }
}
