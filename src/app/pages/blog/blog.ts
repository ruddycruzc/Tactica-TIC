import { Component } from '@angular/core';
import { BlogSectionComponent } from '../../components/sections/blog-section/blog-section';
@Component({
  selector: 'app-blog',
  imports: [BlogSectionComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
