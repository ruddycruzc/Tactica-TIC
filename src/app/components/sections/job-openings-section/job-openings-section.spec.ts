import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningsSection } from './job-openings-section';

describe('JobOpeningsSection', () => {
  let component: JobOpeningsSection;
  let fixture: ComponentFixture<JobOpeningsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOpeningsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOpeningsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
