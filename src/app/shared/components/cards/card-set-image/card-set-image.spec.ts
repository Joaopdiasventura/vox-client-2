import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSetImage } from './card-set-image';

describe('SetImageCard', () => {
  let component: CardSetImage;
  let fixture: ComponentFixture<CardSetImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSetImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSetImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
