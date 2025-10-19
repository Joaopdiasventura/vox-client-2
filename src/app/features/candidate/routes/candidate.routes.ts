import { Routes } from '@angular/router';
import { ConfigCandidate } from '../config-candidate/config-candidate';
import { CreateCandidate } from '../create-candidate/create-candidate';
import { ViewCandidateInSession } from '../view-candidate-in-session/view-candidate-in-session';

export const candidateRoutes: Routes = [
    { path: 'config-candidate', component: ConfigCandidate },
    { path: 'create-candidate', component: CreateCandidate },
    { path: 'candidate-in-session', component: ViewCandidateInSession }
];
