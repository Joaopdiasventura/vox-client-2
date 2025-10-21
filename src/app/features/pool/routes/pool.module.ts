import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { poolRoutes } from '../routes/pool.routes';

@NgModule({
  imports: [RouterModule.forChild(poolRoutes)],
  exports: [RouterModule],
})
export class PoolModule {}
