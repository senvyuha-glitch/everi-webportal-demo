import { Routes } from '@angular/router';
import { Home } from './features/components/home/home';
import { Profile } from './features/components/profile/profile';
import { Leadership } from './features/components/leadership/leadership';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path : 'profile', component: Profile},
     {path : 'leaderships', component: Leadership},
    {path: '**', redirectTo: '', pathMatch: 'full' },
];
