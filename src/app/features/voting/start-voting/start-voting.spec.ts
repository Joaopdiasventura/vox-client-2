import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartVoting } from './start-voting';

describe('StartVoting', () => {
  let component: StartVoting;
  let fixture: ComponentFixture<StartVoting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartVoting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartVoting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
