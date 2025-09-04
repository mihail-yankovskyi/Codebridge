import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    loadComponent: () => import('./home-page/home-page').then(c => c.HomePage)
  },
  {
    path: 'articles/:id',
    loadComponent: () => import('./article-details/article-details').then(c => c.ArticleDetails)
  },
  {
    path: '**',
    redirectTo: '/articles'
  }
];
