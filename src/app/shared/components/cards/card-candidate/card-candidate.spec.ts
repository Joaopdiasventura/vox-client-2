import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCandidate } from './card-candidate';

describe('CardCandidate', () => {
  let component: CardCandidate;
  let fixture: ComponentFixture<CardCandidate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCandidate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCandidate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
