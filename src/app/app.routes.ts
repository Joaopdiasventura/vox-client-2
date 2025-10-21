import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth';
import { AuthPage } from './features/auth/auth-page/auth-page';


export const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'home-page',
    //canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/home-page/home-page').then(({ HomePage }) => HomePage),
  },
  {
    path: 'pages',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/view-page/view.page.module').then(m => m.ViewPageModule),
  },

];