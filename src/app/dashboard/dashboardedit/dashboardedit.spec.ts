import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardedit } from './dashboardedit';

describe('Dashboardedit', () => {
  let component: Dashboardedit;
  let fixture: ComponentFixture<Dashboardedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
