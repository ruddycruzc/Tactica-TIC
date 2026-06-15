import { Component } from '@angular/core';
import { JobOpeningsSection } from '../../components/sections/job-openings-section/job-openings-section';
import { FinalCtaSection } from '../../components/sections/final-cta-section/final-cta-section';
import { ContactForm } from "../../components/forms/contact-form/contact-form";

@Component({
  selector: 'app-careers',
  imports: [JobOpeningsSection, FinalCtaSection, ContactForm],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {}
