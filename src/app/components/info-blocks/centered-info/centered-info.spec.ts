import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredInfo } from './centered-info';

describe('CenteredInfo', () => {
  let component: CenteredInfo;
  let fixture: ComponentFixture<CenteredInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
