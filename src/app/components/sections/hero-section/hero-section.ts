import { Component } from '@angular/core';

import { Hero } from '../../hero/hero/hero';
import { AnimatedBackground } from '../../media/animated-background/animated-background';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    AnimatedBackground,
    Hero
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {}
