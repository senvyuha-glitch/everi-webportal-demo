import { Routes } from '@angular/router';
import { Home } from './features/components/home/home';
import { Profile } from './features/components/profile/profile';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path : 'profile', component: Profile},
    {path: '**', redirectTo: '', pathMatch: 'full' },
];
