import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolowingVotingPage } from './folowing-voting-page';

describe('FolowingVotingPage', () => {
  let component: FolowingVotingPage;
  let fixture: ComponentFixture<FolowingVotingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolowingVotingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolowingVotingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
