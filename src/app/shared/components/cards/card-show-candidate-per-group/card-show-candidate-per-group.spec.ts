import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShowCandidatePerGroup } from './card-show-candidate-per-group';

describe('CardShowCandidatePerGroup', () => {
  let component: CardShowCandidatePerGroup;
  let fixture: ComponentFixture<CardShowCandidatePerGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardShowCandidatePerGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardShowCandidatePerGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
