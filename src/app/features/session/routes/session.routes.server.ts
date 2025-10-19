import { ServerRoute, RenderMode } from '@angular/ssr';

export const sessionServerRoutes: ServerRoute[] = [
    { path: 'session', renderMode: RenderMode.Client},
    { path: 'session/config-session', renderMode: RenderMode.Client },
    { path: 'session/create-session', renderMode: RenderMode.Client },
    { path: 'session/sessions-page', renderMode: RenderMode.Client }
]