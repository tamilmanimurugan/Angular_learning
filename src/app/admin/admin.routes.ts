import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin').then(m => m.Admin),

    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./users/users').then(m => m.Users)
      },
      {
        path: 'config',
        loadComponent: () =>
          import('../config/config').then(m => m.Config)
      }
    ]
  }
];