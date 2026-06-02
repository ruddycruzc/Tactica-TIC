import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenCarousel } from './fullscreen-carousel';

describe('FullscreenCarousel', () => {
  let component: FullscreenCarousel;
  let fixture: ComponentFixture<FullscreenCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
