import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNav } from './button-nav';

describe('ButtonNav', () => {
  let component: ButtonNav;
  let fixture: ComponentFixture<ButtonNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
