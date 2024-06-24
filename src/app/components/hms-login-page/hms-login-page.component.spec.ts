import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsLoginPageComponent } from './hms-login-page.component';

describe('HmsLoginPageComponent', () => {
  let component: HmsLoginPageComponent;
  let fixture: ComponentFixture<HmsLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmsLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmsLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
