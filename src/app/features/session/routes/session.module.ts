import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sessionRoutes } from '../routes/session.routes';

@NgModule({
  imports: [RouterModule.forChild(sessionRoutes)],
  exports: [RouterModule],
})
export class SessionModule {}
