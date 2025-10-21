import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCandidateList } from '../../../shared/components/cards/card-candidate-list/card-candidate-list';
import { ButtonPage } from '../../../shared/components/buttons/button-page/button-page';
import { CardShowCandidatePerGroup } from '../../../shared/components/cards/card-show-candidate-per-group/card-show-candidate-per-group';

@Component({
  selector: 'app-view-candidate-in-session',
  imports: [CardCandidateList, CommonModule, ButtonPage, CardShowCandidatePerGroup],
  templateUrl: './view-candidate-in-session.html',
  styleUrl: './view-candidate-in-session.scss'
})
export class ViewCandidateInSession {
  cards = [
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Jojo'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Maria'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Carlos'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Ana'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Rafael'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Luiza'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Felipe'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Camila'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Bruno'
    },
    {
      image: 'assets/svg/candidate-list-icon-red.svg',
      name: 'Isabela'
    }
  ];

  currentPage = 0;
  cardsPerPage = 3;

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
