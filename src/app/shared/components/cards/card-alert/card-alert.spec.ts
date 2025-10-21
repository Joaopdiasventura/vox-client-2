import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlert } from './card-alert';

describe('CardAlert', () => {
  let component: CardAlert;
  let fixture: ComponentFixture<CardAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
