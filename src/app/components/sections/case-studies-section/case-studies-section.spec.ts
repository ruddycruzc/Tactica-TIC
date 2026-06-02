import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesSection } from './case-studies-section';

describe('CaseStudiesSection', () => {
  let component: CaseStudiesSection;
  let fixture: ComponentFixture<CaseStudiesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudiesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
