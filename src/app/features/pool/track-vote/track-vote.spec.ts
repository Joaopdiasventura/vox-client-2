import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackVote } from './track-vote';

describe('TrackVote', () => {
  let component: TrackVote;
  let fixture: ComponentFixture<TrackVote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackVote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackVote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
