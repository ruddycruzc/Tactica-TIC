import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnsGrid } from './three-columns-grid';

describe('ThreeColumnsGrid', () => {
  let component: ThreeColumnsGrid;
  let fixture: ComponentFixture<ThreeColumnsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeColumnsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeColumnsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
