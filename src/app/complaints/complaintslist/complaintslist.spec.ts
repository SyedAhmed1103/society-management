import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintslist } from './complaintslist';

describe('Complaintslist', () => {
  let component: Complaintslist;
  let fixture: ComponentFixture<Complaintslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintslist],
    }).compileComponents();

    fixture = TestBed.createComponent(Complaintslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
