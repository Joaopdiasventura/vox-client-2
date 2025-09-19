import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { HistoryPage } from './features/history-page/history-page';
import { ViewPage } from './features/view-page/view-page';
import { ViewResults } from './features/view-results/view-results';
import { FolowingVotingPage } from './features/following-voting-page/folowing-voting-page';


export const routes: Routes = [
    {path: '' , component: HomePage},
    {path: 'view', component: ViewPage,
        children: [
            {path: 'history-page', component:HistoryPage},
            {path: 'vote-history-result/:id', component:ViewResults},
            {path: 'following-voting-page', component:FolowingVotingPage},
        ]
    }
];
