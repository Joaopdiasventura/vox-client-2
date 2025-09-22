import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingVotingUnblockPage } from './following-voting-unblock-page';

describe('FollowingVotingUnblockPage', () => {
  let component: FollowingVotingUnblockPage;
  let fixture: ComponentFixture<FollowingVotingUnblockPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingVotingUnblockPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingVotingUnblockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
