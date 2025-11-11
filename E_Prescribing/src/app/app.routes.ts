import { Routes } from '@angular/router';
import { Login } from './user/login/login';
import { Dashboard } from './dashboard/dashboard';
import { MainLayout } from './layout/main-layout';
import { User } from './user/user';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: '', component: User, children: [
        {path: 'login', component: Login}
    ]},
    {path: '', component: MainLayout, children: [
        { path: 'dashboard', component: Dashboard }
    ]},
  

    

];
