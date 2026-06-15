import { Component } from '@angular/core';

import { ContactForm } from '../../forms/contact-form/contact-form';

@Component({
  selector: 'app-contact-form-section',
  standalone: true,
  imports: [ContactForm],
  templateUrl: './contact-form-section.html',
  styleUrl: './contact-form-section.css',
})
export class ContactFormSection {}
