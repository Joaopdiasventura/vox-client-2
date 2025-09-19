import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { HistoryPage } from './features/history-page/history-page';
import { ViewPage } from './features/view-page/view-page';
import { TrackVote } from './features/track-vote/track-vote';


export const routes: Routes = [
    {path: '' , component: HomePage},
    {path: 'view', component: ViewPage,
        children: [
            {path: 'history-page', component:HistoryPage},
            {path: 'track-vote', component:TrackVote},
        ]
    }
];
