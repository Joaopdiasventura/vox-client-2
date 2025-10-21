import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
 
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'home-page', renderMode: RenderMode.Prerender },

  { path: 'pages', renderMode: RenderMode.Client },

  { path: 'pages/pool', renderMode: RenderMode.Client },
  { path: 'pages/pool/history-page', renderMode: RenderMode.Client },
  { path: 'pages/pool/vote-history-result/:id', renderMode: RenderMode.Client },
  { path: 'pages/pool/track-vote', renderMode: RenderMode.Client },
  { path: 'pages/pool/following-voting-page', renderMode: RenderMode.Client },
  { path: 'pages/pool/following-voting-block-page', renderMode: RenderMode.Client },
  { path: 'pages/pool/following-voting-unblock-page', renderMode: RenderMode.Client },

  { path: 'pages/candidate', renderMode: RenderMode.Client },
  { path: 'pages/candidate/config-candidate', renderMode: RenderMode.Client },
  { path: 'pages/candidate/create-candidate', renderMode: RenderMode.Client },
  { path: 'pages/candidate/candidate-in-session', renderMode: RenderMode.Client },

  { path: 'pages/session', renderMode: RenderMode.Client },
  { path: 'pages/session/create-session', renderMode: RenderMode.Client },
  { path: 'pages/session/config-session', renderMode: RenderMode.Client },
  { path: 'pages/session/sessions-page', renderMode: RenderMode.Client },
];
