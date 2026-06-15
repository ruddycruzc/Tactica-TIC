import { Component } from '@angular/core';

import { LogosCarousel } from '../../ui/carousel/logos-carousel/logos-carousel';

@Component({
  selector: 'app-logos-section',
  standalone: true,
  imports: [LogosCarousel],
  templateUrl: './logos-section.html',
  styleUrl: './logos-section.css',
})
export class LogosSection {}
