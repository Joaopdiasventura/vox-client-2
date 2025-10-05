import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCandidateList } from '../../shared/components/cards/card-candidate-list/card-candidate-list';
import { ButtonPage } from '../../shared/components/buttons/button-page/button-page';

@Component({
  selector: 'app-sessions-page',
  imports: [CardCandidateList, CommonModule, ButtonPage],
  templateUrl: './sessions-page.html',
  styleUrl: './sessions-page.scss'
})
export class SessionsPage {
  cards = [
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group A',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group B',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group C',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group D',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group E',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group F',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group G',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group H',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group I',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group J',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group K',
      participant: '12 Candidatos'
    },
    {
      image: 'assets/svg/default-icon-group-grey.svg',
      groupName: 'Group L',
      participant: '12 Candidatos'
    }
  ];

  currentPage = 0;
  cardsPerPage = 4;

  get totalPages() {
    return Math.ceil(this.cards.length / this.cardsPerPage);
  }

  get visibleCards() {
    const start = this.currentPage * this.cardsPerPage;
    return this.cards.slice(start, start + this.cardsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 0) this.currentPage--;
  }


  get previousPageNumber(): string {
    return this.currentPage >= 0 ? String(this.currentPage + 1) : '';
  }

  get nextPageNumber(): string {
    return this.currentPage < this.totalPages - 1 ? String(this.currentPage + 2) : '';
  }
}
