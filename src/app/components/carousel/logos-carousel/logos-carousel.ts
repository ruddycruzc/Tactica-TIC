import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LogoItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-logos-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos-carousel.html',
  styleUrl: './logos-carousel.css',
})
export class LogosCarousel {
  logos: LogoItem[] = [
    { src: '/assets/Logos/Arriba.png', alt: 'Capsa Food' },
    { src: '/assets/Logos/Arriba-1.png', alt: 'Emulsa' },
    { src: '/assets/Logos/Arriba-2.png', alt: 'Grupo El Gaitero' },
    { src: '/assets/Logos/Arriba-3.png', alt: 'Puerto de Avilés' },
    { src: '/assets/Logos/Arriba-4.png', alt: 'Delfin Tubes' },
    { src: '/assets/Logos/Arriba-5.png', alt: 'Axalta' },
  ];
}
