import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPage } from './view-page';

const routes: Routes = [
  {
    path: '',
    component: ViewPage,
    children: [
      {
        path: 'pool',
        loadChildren: () =>
          import('../pool/routes/pool.module').then(m => m.PoolModule),
      },
      {
        path: 'candidate',
        loadChildren: () =>
          import('../candidate/routes/candidate.module').then(m => m.CandidateModule),
      },
      {
        path: 'session',
        loadChildren: () =>
          import('../session/routes/session.module').then(m => m.SessionModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPageModule {}
