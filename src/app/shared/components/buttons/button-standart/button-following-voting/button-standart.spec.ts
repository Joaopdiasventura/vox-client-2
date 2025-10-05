import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStandart } from './button-standart';

describe('ButtonFollowingVoting', () => {
  let component: ButtonStandart;
  let fixture: ComponentFixture<ButtonStandart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStandart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStandart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
