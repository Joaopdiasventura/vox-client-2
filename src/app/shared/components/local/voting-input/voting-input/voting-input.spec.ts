import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingInput } from './voting-input';

describe('VotingInput', () => {
  let component: VotingInput;
  let fixture: ComponentFixture<VotingInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
