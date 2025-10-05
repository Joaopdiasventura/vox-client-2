import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupChose } from './card-group-chose';

describe('CardGroupChose', () => {
  let component: CardGroupChose;
  let fixture: ComponentFixture<CardGroupChose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGroupChose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGroupChose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
