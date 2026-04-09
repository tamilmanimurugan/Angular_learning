import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'taskone',
        loadComponent: () => import('./task-one/task-one').then(m => m.TaskOne)
    }
];
