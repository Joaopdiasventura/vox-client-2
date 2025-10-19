import { ServerRoute, RenderMode } from '@angular/ssr';

export const candidateServerRoutes: ServerRoute[] = [
    { path: 'candidate', renderMode: RenderMode.Client},
    { path: 'candidate/config-candidate', renderMode: RenderMode.Client },
    { path: 'candidate/create-candidate', renderMode: RenderMode.Client },
    { path: 'candidate/candidate-in-session', renderMode: RenderMode.Client }
]