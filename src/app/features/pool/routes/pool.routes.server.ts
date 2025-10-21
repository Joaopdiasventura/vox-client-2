import { ServerRoute, RenderMode } from '@angular/ssr';

export const poolServerRoutes: ServerRoute[] = [
    { path: 'pool', renderMode: RenderMode.Client},
    { path: 'pool/following-voting-page', renderMode: RenderMode.Client },
    { path: 'pool/following-voting-block-page', renderMode: RenderMode.Client },
    { path: 'pool/following-voting-unblock-page', renderMode: RenderMode.Client },
    { path: 'pool/track-vote', renderMode: RenderMode.Client },
    { path: 'pool/view-results', renderMode: RenderMode.Client },
    { path: 'pool/history-page', renderMode: RenderMode.Client }
]