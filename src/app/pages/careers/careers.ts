import { Component } from '@angular/core';
import { JobOpeningsSection } from '../../components/sections/job-openings-section/job-openings-section';

@Component({
  selector: 'app-careers',
  imports: [JobOpeningsSection],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {}
