import { Component } from '@angular/core';
import { JobOpeningsSection } from '../../components/sections/job-openings-section/job-openings-section';
import { FinalCtaSection } from '../../components/sections/final-cta-section/final-cta-section';

@Component({
  selector: 'app-careers',
  imports: [JobOpeningsSection, FinalCtaSection],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {}
