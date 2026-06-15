import { Component } from '@angular/core';
import { BlogSectionComponent } from '../../components/sections/blog-section/blog-section';
import { ContactForm } from '../../components/forms/contact-form/contact-form';
@Component({
  selector: 'app-blog',
  imports: [BlogSectionComponent, ContactForm],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
