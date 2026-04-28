import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'taskone',
    loadComponent: () => import('./task-one/task-one').then(m => m.TaskOne),
    title: 'Task One'
  },

  {
    path: 'layout',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    title: 'Layout'
  },

  {
    path: 'footer',
    loadComponent: () => import('./footer/footer').then(m => m.Footer),
    title: 'Footer'
  },

  {
    path: 'header',
    loadComponent: () => import('./header/header').then(m => m.Header),
    title: 'Header'
  },

  {
    path: 'sidebar',
    loadComponent: () => import('./sidebar/sidebar').then(m => m.Sidebar),
    title: 'Sidebar'
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Home'
  },
  
   {
    path: 'forms',
    loadComponent: () => import('./forms/forms').then(m => m.Forms),
    title: 'Forms'
  },

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then(m => m.Profile),
    title: 'Profile',
    children: [
      {
        path: 'details',
        loadComponent: () => import('./profile/details').then(m => m.Details),
        title: 'Details'
      },

      {
        path: 'settings',
        loadComponent: () => import('./profile/settings').then(m => m.SettingsChild),
        title: 'Settings'
      }
    ]
  },

   {
    path: 'admin',
    loadChildren: () =>import('./admin/admin.routes').then(m => m.adminRoutes),
    title: 'Admin'
  },

  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo: 'taskone',
    pathMatch: 'full'
  },
];