import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLeftImage } from './info-left-image';

describe('InfoLeftImage', () => {
  let component: InfoLeftImage;
  let fixture: ComponentFixture<InfoLeftImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoLeftImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLeftImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
