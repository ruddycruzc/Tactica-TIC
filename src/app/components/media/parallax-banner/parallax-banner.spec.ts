import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxBanner } from './parallax-banner';

describe('ParallaxBanner', () => {
  let component: ParallaxBanner;
  let fixture: ComponentFixture<ParallaxBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
