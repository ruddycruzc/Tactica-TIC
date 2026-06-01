import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHero } from './video-hero';

describe('VideoHero', () => {
  let component: VideoHero;
  let fixture: ComponentFixture<VideoHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
