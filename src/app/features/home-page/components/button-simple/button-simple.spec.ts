import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSimple } from './button-simple';

describe('ButtonSimple', () => {
  let component: ButtonSimple;
  let fixture: ComponentFixture<ButtonSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
