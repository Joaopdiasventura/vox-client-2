import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCandidateList } from './card-candidate-list';

describe('CardCandidateList', () => {
  let component: CardCandidateList;
  let fixture: ComponentFixture<CardCandidateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCandidateList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCandidateList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
