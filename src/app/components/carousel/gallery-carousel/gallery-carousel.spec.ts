import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCarousel } from './gallery-carousel';

describe('GalleryCarousel', () => {
  let component: GalleryCarousel;
  let fixture: ComponentFixture<GalleryCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
