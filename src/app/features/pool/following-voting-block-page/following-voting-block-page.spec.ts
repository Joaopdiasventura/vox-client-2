import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingVotingBlockPage } from './following-voting-block-page';

describe('FollowingVotingBlockPage', () => {
  let component: FollowingVotingBlockPage;
  let fixture: ComponentFixture<FollowingVotingBlockPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingVotingBlockPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingVotingBlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
