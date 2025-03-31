import { Routes } from "@angular/router";

export const COMPONENT_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'therapy/:therapyId',
        loadComponent: () => import('./therapy-details/therapy-details.component').then(m => m.TherapyDetailsComponent)
    },
    {
        path: 'how-it-works',
        loadComponent: () => import('./how-it-works/how-it-works.component').then(h => h.HowItWorksComponent)
    },
    {
        path: 'plans-pricing',
        loadComponent: () => import('./plans-pricing/plans-pricing.component').then(p => p.PlansPricingComponent)
    },
    {
        path: 'therapists',
        loadComponent: () => import('./therapists/therapists.component').then(t => t.TherapistsComponent)
    },
];