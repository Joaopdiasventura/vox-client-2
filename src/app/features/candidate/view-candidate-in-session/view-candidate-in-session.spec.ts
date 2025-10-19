import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandidateInSession } from './view-candidate-in-session';

describe('ViewCandidateInSession', () => {
  let component: ViewCandidateInSession;
  let fixture: ComponentFixture<ViewCandidateInSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCandidateInSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCandidateInSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
