import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { candidateRoutes } from './candidate.routes';

@NgModule({
  imports: [RouterModule.forChild(candidateRoutes)],
  exports: [RouterModule],
})
export class CandidateModule {}