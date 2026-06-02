import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonsecondary } from './buttonsecondary';

describe('Buttonsecondary', () => {
  let component: Buttonsecondary;
  let fixture: ComponentFixture<Buttonsecondary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonsecondary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonsecondary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
