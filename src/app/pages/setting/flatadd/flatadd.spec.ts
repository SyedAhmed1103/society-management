import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatadd } from './flatadd';

describe('Flatadd', () => {
  let component: Flatadd;
  let fixture: ComponentFixture<Flatadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flatadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Flatadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
