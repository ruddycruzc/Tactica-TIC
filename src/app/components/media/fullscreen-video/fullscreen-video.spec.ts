import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenVideo } from './fullscreen-video';

describe('FullscreenVideo', () => {
  let component: FullscreenVideo;
  let fixture: ComponentFixture<FullscreenVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
