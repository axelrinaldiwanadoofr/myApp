import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'titi',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tutu',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new.page').then( m => m.NewPage)
  },
  {
    path: 'liste-films',
    loadComponent: () => import('./liste-films/liste-films.page').then( m => m.ListeFilmsPage)
  },
];
