import { Component } from '@angular/core';
import { JobOpeningsSection } from '../../components/sections/job-openings-section/job-openings-section';

import { ContactForm } from "../../components/forms/contact-form/contact-form";

@Component({
  selector: 'app-careers',
  imports: [JobOpeningsSection, ContactForm],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {}
