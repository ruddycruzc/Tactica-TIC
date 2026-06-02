import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonprimary } from './buttonprimary';

describe('Buttonprimary', () => {
  let component: Buttonprimary;
  let fixture: ComponentFixture<Buttonprimary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonprimary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonprimary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
