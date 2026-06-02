import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintsadd } from './complaintsadd';

describe('Complaintsadd', () => {
  let component: Complaintsadd;
  let fixture: ComponentFixture<Complaintsadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintsadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Complaintsadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
