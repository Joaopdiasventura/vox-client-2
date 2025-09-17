import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResult } from './card-result';

describe('CardResult', () => {
  let component: CardResult;
  let fixture: ComponentFixture<CardResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
