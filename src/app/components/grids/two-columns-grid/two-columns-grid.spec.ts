import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsGrid } from './two-columns-grid';

describe('TwoColumnsGrid', () => {
  let component: TwoColumnsGrid;
  let fixture: ComponentFixture<TwoColumnsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoColumnsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
