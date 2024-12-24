import { Routes } from '@angular/router';

export const routes: Routes = [
    
    { path: 'home', loadComponent: ()=>import('./pages/home/home.component') },
    { path: 'not-found', loadComponent: () => import('./shared/components/not-found/not-found.component') },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' },
];  
