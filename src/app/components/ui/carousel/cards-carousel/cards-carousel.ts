import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ImageCard } from '../../cards/image-card/image-card';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import {TeamMember } from '../../../../interfaces/data/team-member.interface';
import { TeamCarouselContent } from '../../../../interfaces/translations/team-carousel-content.interface';
import { TEAM_MEMBERS }
from '../../../../data/team/team.data';

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
readonly cards = TEAM_MEMBERS;

  get displayCards(): TeamMember[] {

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

  private getSlideStep(): number {

    const viewport =
      this.viewport?.nativeElement;

    const slide =
      viewport?.querySelector<HTMLElement>(
        '.cards-carousel__slide'
      );

    if (
      !viewport ||
      !slide
    ) {
      return 360;
    }

    const styles =
      getComputedStyle(
        viewport.querySelector<HTMLElement>(
          '.cards-carousel__track'
        ) || viewport
      );

    const gap =
      Number.parseFloat(styles.columnGap || styles.gap) || 0;

    return slide.getBoundingClientRect().width + gap;
  }

  private scroll(direction: 1 | -1): void {

    if (!this.viewport) {
      return;
    }

    this.viewport.nativeElement.scrollBy({
      left: this.getSlideStep() * direction,
      behavior: 'smooth'
    });
  }

  prev(): void {
    this.scroll(-1);
  }

  next(): void {
    this.scroll(1);
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
