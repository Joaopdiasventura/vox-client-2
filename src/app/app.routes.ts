import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { HistoryPage } from './features/history-page/history-page';
import { ViewPage } from './features/view-page/view-page';
import { ViewResults } from './features/view-results/view-results';
import { TrackVote } from './features/track-vote/track-vote';
import { FollowingVotingPage } from './features/following-voting-page/folowing-voting-page';
import { FollowingVotingBlockPage  } from './features/following-voting-block-page/following-voting-block-page';
import { FollowingVotingUnblockPage  } from './features/following-voting-unblock-page/following-voting-unblock-page';
import { CreateSession } from './features/create-session/create-session';
import { ConfigSession } from './features/config-session/config-session';
import { ConfigCandidate } from './features/config-candidate/config-candidate';
import { SessionsPage } from './features/sessions-page/sessions-page';

export const routes: Routes = [
    {path: '' , component: HomePage},
    {path: 'view', component: ViewPage,
        children: [
            {path: 'history-page', component:HistoryPage},
            {path: 'vote-history-result/:id', component:ViewResults},
            {path: 'track-vote', component:TrackVote},
            {path: 'following-voting-page', component:FollowingVotingPage},
            {path: 'following-voting-block-page', component:FollowingVotingBlockPage},
            {path: 'following-voting-unblock-page', component:FollowingVotingUnblockPage},
            {path: 'create-session', component:CreateSession},
            {path: 'config-session', component:ConfigSession},
            {path: 'config-candidate', component:ConfigCandidate},
            {path: 'sessions-page', component:SessionsPage},
        ]
    }
];
