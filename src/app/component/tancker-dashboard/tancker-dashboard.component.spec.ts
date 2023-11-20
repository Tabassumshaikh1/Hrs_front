import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanckerDashboardComponent } from './tancker-dashboard.component';

describe('TanckerDashboardComponent', () => {
  let component: TanckerDashboardComponent;
  let fixture: ComponentFixture<TanckerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanckerDashboardComponent]
    });
    fixture = TestBed.createComponent(TanckerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
