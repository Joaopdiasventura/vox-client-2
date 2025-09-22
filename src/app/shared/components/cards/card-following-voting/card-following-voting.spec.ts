import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFollowingVoting } from './card-following-voting';

describe('CardFollowingVoting', () => {
  let component: CardFollowingVoting;
  let fixture: ComponentFixture<CardFollowingVoting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFollowingVoting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFollowingVoting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
