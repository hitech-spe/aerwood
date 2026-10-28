import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'prodotti', 
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent) 
  },
  { 
    path: 'area-tecnica', 
    loadComponent: () => import('./components/technical/technical.component').then(m => m.TechnicalComponent) 
  },
  { 
    path: 'certificazioni', 
    loadComponent: () => import('./components/certifications/certifications.component').then(m => m.CertificationsComponent) 
  },
  { 
    path: 'cataloghi', 
    loadComponent: () => import('./components/catalogs/catalogs.component').then(m => m.CatalogsComponent) 
  },
  { 
    path: 'progetti', 
    loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) 
  },
  { 
    path: 'chi-siamo', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'contatti', 
    loadComponent: () => import('./components/contacts/contacts.component').then(m => m.ContactsComponent) 
  },
  { 
    path: 'privacy-policy', 
    loadComponent: () => import('./components/privacy/privacy.component').then(m => m.PrivacyComponent) 
  },
  { 
    path: 'terms-conditions', 
    loadComponent: () => import('./components/terms/terms.component').then(m => m.TermsComponent) 
  },
  { path: '**', redirectTo: '' }
];
