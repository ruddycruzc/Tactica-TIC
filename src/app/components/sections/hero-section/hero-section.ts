import { Component } from '@angular/core';

import { Hero } from '../../hero/hero/hero';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [Hero],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {}
