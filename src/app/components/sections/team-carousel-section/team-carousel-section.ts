import { Component } from '@angular/core';

import { CardsCarousel } from '../../ui/carousel/cards-carousel/cards-carousel';

@Component({
  selector: 'app-team-carousel-section',
  standalone: true,
  imports: [CardsCarousel],
  templateUrl: './team-carousel-section.html',
  styleUrl: './team-carousel-section.css',
})
export class TeamCarouselSection {}
