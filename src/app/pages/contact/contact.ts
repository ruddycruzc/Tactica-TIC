import { Component } from '@angular/core';
import { NewsletterSection } from '../../components/sections/newslestter-section/newsletter-section';
import { TestimonialsSection } from '../../components/sections/testimonials-section/testimonials-section';

@Component({
  selector: 'app-contact',
  imports: [NewsletterSection, TestimonialsSection],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
