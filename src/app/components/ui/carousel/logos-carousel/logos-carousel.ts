import { Component } from '@angular/core';

import { LogoItem } from '../../../../interfaces/logos-carousel.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-logos-carousel',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './logos-carousel.html',
  styleUrl: './logos-carousel.css',
})
export class LogosCarousel {

  readonly logos: LogoItem[] = [
    { src: '/assets/Logos/Arriba-1.png', alt: 'Capsa Food' },
    { src: '/assets/Logos/Arriba-2.png', alt: 'Emulsa' },
    { src: '/assets/Logos/Arriba-3.png', alt: 'Grupo El Gaitero' },
    { src: '/assets/Logos/Arriba-4.png', alt: 'Puerto de Aviles' },
    { src: '/assets/Logos/Arriba-5.png', alt: 'Axalta' }
  ];

}

