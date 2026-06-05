import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatedit } from './flatedit';

describe('Flatedit', () => {
  let component: Flatedit;
  let fixture: ComponentFixture<Flatedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flatedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Flatedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
