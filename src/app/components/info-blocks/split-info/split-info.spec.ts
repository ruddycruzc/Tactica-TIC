import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitInfo } from './split-info';

describe('SplitInfo', () => {
  let component: SplitInfo;
  let fixture: ComponentFixture<SplitInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
