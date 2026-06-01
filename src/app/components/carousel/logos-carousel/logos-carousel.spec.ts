import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosCarousel } from './logos-carousel';

describe('LogosCarousel', () => {
  let component: LogosCarousel;
  let fixture: ComponentFixture<LogosCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
