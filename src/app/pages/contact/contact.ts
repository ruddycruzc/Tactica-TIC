import { Component } from '@angular/core';
import { NewsletterSection } from '../../components/sections/newsletter-section/newsletter-section';
import { ContactForm } from '../../components/forms/contact-form/contact-form';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NewsletterSection, ContactForm], 
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}