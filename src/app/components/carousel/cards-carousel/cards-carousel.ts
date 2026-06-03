import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamCardData {
  image: string;
  name: string;
  excerpt: string;
  details: string;
}

@Component({
  selector: 'app-cards-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-carousel.html',
  styleUrl: './cards-carousel.css',
})
export class CardsCarousel {
  @Input() cards: TeamCardData[] = [
    {
      image: '/assets/images/cards/team1.png',
      name: 'Marco Rubio',
      excerpt: 'Arquitectura de APIs y sistemas críticos.',
      details: 'Aplica metodologías DevOps y optimiza la infraestructura para cargas empresariales.',
    },
    {
      image: '/assets/images/cards/team2.png',
      name: 'Lucía Pérez',
      excerpt: 'Interfaces limpias y experiencias accesibles.',
      details: 'Diseña flujos adaptativos que mantienen consistencia visual en desktop y mobile.',
    },
    {
      image: '/assets/images/cards/team3.png',
      name: 'Sara Torres',
      excerpt: 'Estrategias de producto centradas en el usuario.',
      details: 'Construye microinteracciones y prototipos que convierten la intención en resultados.',
    },
    {
      image: '/assets/images/cards/team1.png',
      name: 'Alejandro Gil',
      excerpt: 'Flujos de despliegue seguros y escalables.',
      details: 'Automatiza pipelines de CI/CD y mantiene la disponibilidad de servicios críticos.',
    },
    {
      image: '/assets/images/cards/team2.png',
      name: 'Natalia Cruz',
      excerpt: 'Visión de producto con foco en valor.',
      details: 'Define prioridades claras y coordina equipos multidisciplinares en cada entrega.',
    },
    {
      image: '/assets/images/cards/team3.png',
      name: 'Carlos Vega',
      excerpt: 'Apps nativas con alto rendimiento.',
      details: 'Implementa experiencias móviles fluidas y mantenibles para usuarios exigentes.',
    },
  ];

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
