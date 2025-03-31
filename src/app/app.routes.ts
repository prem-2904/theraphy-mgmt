import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'home',
        component: LayoutComponent,
        loadChildren: () => import('./pages/components/components.routes').then(m => m.COMPONENT_ROUTES)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    }
];
