import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalHero } from './minimal-hero';

describe('MinimalHero', () => {
  let component: MinimalHero;
  let fixture: ComponentFixture<MinimalHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimalHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
