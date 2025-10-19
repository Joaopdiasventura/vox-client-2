import { Routes } from '@angular/router';
import { HistoryPage } from '../history-page/history-page';
import { ViewResults } from '../view-results/view-results';
import { TrackVote } from '../track-vote/track-vote';
import { FollowingVotingPage } from '../following-voting-page/folowing-voting-page';
import { FollowingVotingBlockPage } from '../following-voting-block-page/following-voting-block-page';
import { FollowingVotingUnblockPage } from '../following-voting-unblock-page/following-voting-unblock-page';

export const poolRoutes: Routes = [
    { path: 'history-page', component: HistoryPage },
    { path: 'vote-history-result/:id', component: ViewResults },
    { path: 'track-vote', component: TrackVote },
    { path: 'following-voting-page', component: FollowingVotingPage },
    { path: 'following-voting-block-page', component: FollowingVotingBlockPage },
    { path: 'following-voting-unblock-page', component: FollowingVotingUnblockPage },
]