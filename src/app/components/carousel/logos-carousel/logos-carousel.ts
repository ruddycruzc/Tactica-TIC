import { Component } from '@angular/core';

import { LogoItem } from '../../../interfaces/logos-carousel.interface';

@Component({
  selector: 'app-logos-carousel',
  standalone: true,
  imports: [],
  templateUrl: './logos-carousel.html',
  styleUrl: './logos-carousel.css',
})
export class LogosCarousel {

  readonly logos: LogoItem[] = [
    { src: '/assets/Logos/Arriba.png', alt: 'Capsa Food' },
    { src: '/assets/Logos/Arriba-1.png', alt: 'Emulsa' },
    { src: '/assets/Logos/Arriba-2.png', alt: 'Grupo El Gaitero' },
    { src: '/assets/Logos/Arriba-3.png', alt: 'Puerto de Avilés' },
    { src: '/assets/Logos/Arriba-4.png', alt: 'Delfin Tubes' },
    { src: '/assets/Logos/Arriba-5.png', alt: 'Axalta' }
  ];

}

