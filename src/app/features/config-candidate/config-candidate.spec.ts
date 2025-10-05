import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCandidate } from './config-candidate';

describe('CandidateConfig', () => {
  let component: ConfigCandidate;
  let fixture: ComponentFixture<ConfigCandidate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigCandidate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigCandidate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
