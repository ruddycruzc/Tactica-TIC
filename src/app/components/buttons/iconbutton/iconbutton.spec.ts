import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iconbutton } from './iconbutton';

describe('Iconbutton', () => {
  let component: Iconbutton;
  let fixture: ComponentFixture<Iconbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iconbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iconbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
