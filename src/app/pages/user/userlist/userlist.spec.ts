import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/dashboard/dashboardlist/dashboardlist.spec.ts
import { Dashboardlist } from './dashboardlist';

describe('Dashboardlist', () => {
  let component: Dashboardlist;
  let fixture: ComponentFixture<Dashboardlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardlist);
========
import { Userlist } from './userlist';

describe('Userlist', () => {
  let component: Userlist;
  let fixture: ComponentFixture<Userlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Userlist);
>>>>>>>> eeddd09b82a3d83243cbd292accd22d71b7b243b:src/app/features/user/userlist/userlist.spec.ts
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
