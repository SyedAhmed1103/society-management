import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintsedit } from './complaintsedit';

describe('Complaintsedit', () => {
  let component: Complaintsedit;
  let fixture: ComponentFixture<Complaintsedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintsedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Complaintsedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
