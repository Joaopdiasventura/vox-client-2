import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSignInUp } from './card-sign-in-up';

describe('CardSignInUp', () => {
  let component: CardSignInUp;
  let fixture: ComponentFixture<CardSignInUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSignInUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSignInUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
