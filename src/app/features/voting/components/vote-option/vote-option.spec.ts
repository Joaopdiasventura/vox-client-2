import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteOption } from './vote-option';

describe('VoteOption', () => {
  let component: VoteOption;
  let fixture: ComponentFixture<VoteOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
