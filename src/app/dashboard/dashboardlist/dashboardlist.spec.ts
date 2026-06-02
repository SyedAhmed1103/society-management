import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardlist } from './dashboardlist';

describe('Dashboardlist', () => {
  let component: Dashboardlist;
  let fixture: ComponentFixture<Dashboardlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
