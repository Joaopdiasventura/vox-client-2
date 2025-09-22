import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlertDoneVote } from './card-alert-done-vote';

describe('CardDoneVote', () => {
  let component: CardAlertDoneVote;
  let fixture: ComponentFixture<CardAlertDoneVote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAlertDoneVote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlertDoneVote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
