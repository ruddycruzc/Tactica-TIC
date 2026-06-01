import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRightImage } from './info-right-image';

describe('InfoRightImage', () => {
  let component: InfoRightImage;
  let fixture: ComponentFixture<InfoRightImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRightImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRightImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
