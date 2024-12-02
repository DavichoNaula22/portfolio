import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./Views/home/home.component').then(m=> m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent:()=> import('./Views/about/about.component').then(m=> m.AboutComponent)
    },
    {
        path: 'contact',
        loadComponent:()=> import('./Views/contact/contact.component').then(m=> m.ContactComponent)
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch: 'full'
    }
];
