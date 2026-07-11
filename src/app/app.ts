import { Component } from '@angular/core';
import { HeaderComponent } from './components/shared/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { WhyWpcComponent } from './components/why-wpc/why-wpc.component';
import { VentilatedFacadeComponent } from './components/ventilated-facade/ventilated-facade.component';
import { ColorsComponent } from './components/colors/colors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnicalComponent } from './components/technical/technical.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    WhyWpcComponent,
    VentilatedFacadeComponent,
    ColorsComponent,
    ProjectsComponent,
    TechnicalComponent,
    AboutComponent,
    ContactsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
