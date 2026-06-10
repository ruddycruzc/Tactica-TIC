import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCarousel } from './basic-carousel';

describe('BasicCarousel', () => {
  let component: BasicCarousel;
  let fixture: ComponentFixture<BasicCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
