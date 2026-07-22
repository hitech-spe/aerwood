import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProductsComponent } from '../products/products.component';
import { WhyWpcComponent } from '../why-wpc/why-wpc.component';
import { VentilatedFacadeComponent } from '../ventilated-facade/ventilated-facade.component';
import { ColorsComponent } from '../colors/colors.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnicalComponent } from '../technical/technical.component';
import { AboutComponent } from '../about/about.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProductsComponent,
    WhyWpcComponent,
    VentilatedFacadeComponent,
    ColorsComponent,
    ProjectsComponent,
    TechnicalComponent,
    AboutComponent,
    ContactsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
