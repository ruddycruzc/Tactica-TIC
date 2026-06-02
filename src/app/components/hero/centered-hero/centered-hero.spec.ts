import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredHero } from './centered-hero';

describe('CenteredHero', () => {
  let component: CenteredHero;
  let fixture: ComponentFixture<CenteredHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
