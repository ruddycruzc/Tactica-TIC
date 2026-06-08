import { Component } from '@angular/core';
import { BlogSection } from '../../components/sections/blog-section/blog-section';
@Component({
  selector: 'app-blog',
  imports: [BlogSection],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
