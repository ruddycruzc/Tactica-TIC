import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empleo } from './empleo';

describe('Empleo', () => {
  let component: Empleo;
  let fixture: ComponentFixture<Empleo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empleo],
    }).compileComponents();

    fixture = TestBed.createComponent(Empleo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
