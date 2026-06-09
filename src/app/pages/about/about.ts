import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/sections/about-section/about-section';

@Component({
  selector: 'app-about',
  imports: [AboutSectionComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
