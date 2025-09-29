import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { HistoryPage } from './features/history-page/history-page';
import { ViewPage } from './features/view-page/view-page';
import { ViewResults } from './features/view-results/view-results';
import { FolowingVotingPage } from './features/following-voting-page/folowing-voting-page';
import { TrackVote } from './features/track-vote/track-vote';


export const routes: Routes = [
    {path: '' , component: HomePage},
    {path: 'view', component: ViewPage,
        children: [
            {path: 'vote-history-result/:id', component:ViewResults , data:{descriptionPage:'Veja o resultado completo da sessão no momento escolhido... A seguir os candidatos e seus votos:', iconPath:'assets/svg/trophy-red.svg' , titlePage:'Resultado'}},
            {path: 'history-page', component:HistoryPage, data:{descriptionPage:'Aqui se encontra o histórico do resultado das sessões, do recente para o mais antigo...', iconPath:'assets/svg/clock-red.svg' , titlePage:'Histórico'}},
            {path: 'following-voting-page', component:FolowingVotingPage, data:{descriptionPage:'Insira o código da Urna do Dispositivo desejado para autorizar votos e administrar a votação.', iconPath:'assets/svg/user-authorized-icon-red.svg' , titlePage:'Autorizar'}},
            {path: 'track-vote/:idGroup', component:TrackVote ,data:{descriptionPage:'Acompanhe o resultado AO VIVO!', iconPath:'assets/svg/computer-icon-red.svg' , titlePage:'Acompanhar'}},
            {path: 'track-vote', component:TrackVote ,data:{descriptionPage:'Acompanhe o resultado AO VIVO!', iconPath:'assets/svg/computer-icon-red.svg' , titlePage:'Acompanhar'}},
        ]
    }
];
