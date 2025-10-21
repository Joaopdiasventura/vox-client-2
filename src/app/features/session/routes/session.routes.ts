import { Routes } from '@angular/router';
import { CreateSession } from '../create-session/create-session';
import { ConfigSession } from '../config-session/config-session';
import { SessionsPage } from '../sessions-page/sessions-page';

export const sessionRoutes: Routes = [
    { path: 'create-session', component: CreateSession },
    { path: 'config-session', component: ConfigSession },
    { path: 'sessions-page', component: SessionsPage }
]