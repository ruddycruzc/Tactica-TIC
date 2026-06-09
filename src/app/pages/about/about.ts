import { Component } from '@angular/core';
import { AboutSection} from '../../components/sections/about-section/about-section';

@Component({
  selector: 'app-about',
  imports: [AboutSection],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
