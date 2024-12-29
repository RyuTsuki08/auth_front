import { Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        title: 'User',
        path: 'user',
        component: UserComponent

    },
    {
        title: 'Home',
        path: '',
        component: AppComponent
    },
    {
        title: 'Login',
        path: 'user/login',
        component: LoginComponent
    },
    {
        title: 'Register',
        path: 'user/register',
        component: RegisterComponent
    }
];
