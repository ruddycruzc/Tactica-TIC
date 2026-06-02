import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColumnsGrid } from './four-columns-grid';

describe('FourColumnsGrid', () => {
  let component: FourColumnsGrid;
  let fixture: ComponentFixture<FourColumnsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourColumnsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourColumnsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
