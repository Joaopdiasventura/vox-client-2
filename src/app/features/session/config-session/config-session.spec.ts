import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSession } from './config-session';

describe('ConfigSession', () => {
  let component: ConfigSession;
  let fixture: ComponentFixture<ConfigSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
