import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ImageCard } from '../../cards/image-card/image-card';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { TeamCard } from '../../../../interfaces/team-card.interface';
import { TeamCarouselContent } from '../../../../interfaces/team-carousel-content.interface';
@Component({
  selector: 'app-cards-carousel',
  standalone: true,
  imports: [
    CommonModule,
    ImageCard,
    AppButtonComponent,
    TranslateModule
  ],
  templateUrl: './cards-carousel.html',
  styleUrl: './cards-carousel.css'
})
export class CardsCarousel {

  readonly carouselContent: TeamCarouselContent = {
    title: 'HOME.TEAM.TITLE',
    subtitle: 'HOME.TEAM.SUBTITLE',
    carouselControls: 'HOME.TEAM.CAROUSEL_CONTROLS',
    previous: 'HOME.TEAM.PREVIOUS',
    next: 'HOME.TEAM.NEXT'
  };

  readonly cards: TeamCard[] = [
    {
      image: '/assets/images/cards/teamcard1.jpeg',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/assets/images/cards/teamcard2.jpeg',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/assets/images/cards/teamcard3.jpeg',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/assets/images/cards/teamcard4.jpeg',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/assets/images/cards/teamcard5.jpeg',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  get displayCards(): TeamCard[] {

    if (this.cards.length === 0) {
      return [];
    }

    return [
      this.cards[this.cards.length - 1],
      ...this.cards,
      this.cards[0]
    ];
  }

  @ViewChild('viewport', { static: true })
  private viewport?: ElementRef<HTMLElement>;

  private isDragging = false;
  private dragStartX = 0;
  private scrollStart = 0;

  private scroll(amount: number): void {

    if (!this.viewport) {
      return;
    }

    this.viewport.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  }

  prev(): void {
    this.scroll(-360);
  }

  next(): void {
    this.scroll(360);
  }

  startDrag(event: PointerEvent): void {

    if (!this.viewport) {
      return;
    }

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.scrollStart = this.viewport.nativeElement.scrollLeft;

    this.viewport.nativeElement.setPointerCapture(
      event.pointerId
    );
  }

  drag(event: PointerEvent): void {

    if (
      !this.isDragging ||
      !this.viewport
    ) {
      return;
    }

    const delta =
      event.clientX - this.dragStartX;

    this.viewport.nativeElement.scrollLeft =
      this.scrollStart - delta;
  }

  endDrag(event: PointerEvent): void {

    if (!this.viewport) {
      return;
    }

    this.isDragging = false;

    this.viewport.nativeElement.releasePointerCapture(
      event.pointerId
    );
  }
}
