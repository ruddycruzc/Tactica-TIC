import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoQueHacemos } from './lo-que-hacemos';

describe('LoQueHacemos', () => {
  let component: LoQueHacemos;
  let fixture: ComponentFixture<LoQueHacemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoQueHacemos],
    }).compileComponents();

    fixture = TestBed.createComponent(LoQueHacemos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
