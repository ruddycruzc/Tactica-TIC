import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCard } from '../../cards/image-card/image-card';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { TeamCard } from '../../../interfaces/team-card.interface';


@Component({
  selector: 'app-cards-carousel',
  standalone: true,
  imports: [CommonModule, ImageCard, AppButtonComponent,TranslateModule],
  templateUrl: './cards-carousel.html',
  styleUrl: './cards-carousel.css',
})
export class CardsCarousel {

  @Input() cards: TeamCard [] = [
    {
      image: '/assets/images/cards/team1.png',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/assets/images/cards/team2.png',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/assets/images/cards/team3.png',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/assets/images/cards/team1.png',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/assets/images/cards/team2.png',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/assets/images/cards/team3.png',
      name: 'Name',
      excerpt: 'Desarrollador Backend Senior',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  get displayCards(): TeamCard[] {
    if (this.cards.length === 0) {
      return [];
    }

    return [this.cards[this.cards.length - 1], ...this.cards, this.cards[0]];
  }

  @ViewChild('viewport', { static: true }) private viewport?: ElementRef<HTMLElement>;
  private isDragging = false;
  private dragStartX = 0;
  private scrollStart = 0;

  scroll(amount: number) {
    if (!this.viewport) {
      return;
    }

    this.viewport.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  }

  prev() {
    this.scroll(-360);
  }

  next() {
    this.scroll(360);
  }

  startDrag(event: PointerEvent) {
    if (!this.viewport) {
      return;
    }

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.scrollStart = this.viewport.nativeElement.scrollLeft;
    this.viewport.nativeElement.setPointerCapture(event.pointerId);
  }

  drag(event: PointerEvent) {
    if (!this.isDragging || !this.viewport) {
      return;
    }

    const delta = event.clientX - this.dragStartX;
    this.viewport.nativeElement.scrollLeft = this.scrollStart - delta;
  }

  endDrag(event: PointerEvent) {
    if (!this.viewport) {
      return;
    }

    this.isDragging = false;
    this.viewport.nativeElement.releasePointerCapture(event.pointerId);
  }
}
