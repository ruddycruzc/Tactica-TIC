import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGrid } from './masonry-grid';

describe('MasonryGrid', () => {
  let component: MasonryGrid;
  let fixture: ComponentFixture<MasonryGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonryGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonryGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
