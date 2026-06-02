import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardadd } from './dashboardadd';

describe('Dashboardadd', () => {
  let component: Dashboardadd;
  let fixture: ComponentFixture<Dashboardadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
