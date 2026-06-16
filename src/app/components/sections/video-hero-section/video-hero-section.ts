import { Component } from '@angular/core';

import { VideoHero } from '../../hero/video-hero/video-hero';

@Component({
  selector: 'app-video-hero-section',
  standalone: true,
  imports: [VideoHero],
  templateUrl: './video-hero-section.html',
  styleUrl: './video-hero-section.css',
})
export class VideoHeroSection {}
