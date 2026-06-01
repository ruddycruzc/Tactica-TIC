import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarousel } from './cards-carousel';

describe('CardsCarousel', () => {
  let component: CardsCarousel;
  let fixture: ComponentFixture<CardsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
