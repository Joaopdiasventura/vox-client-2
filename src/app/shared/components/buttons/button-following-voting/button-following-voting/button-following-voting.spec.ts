import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFollowingVoting } from './button-following-voting';

describe('ButtonFollowingVoting', () => {
  let component: ButtonFollowingVoting;
  let fixture: ComponentFixture<ButtonFollowingVoting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFollowingVoting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFollowingVoting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
