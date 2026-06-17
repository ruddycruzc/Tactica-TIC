import { Component } from '@angular/core';

import { MediaItem } from '../../../interfaces/media-item.interface';
import { ThreeColumnMedia } from '../../media/three-column-media/three-column-media';

@Component({
  selector: 'app-hero-aboutus',
  standalone: true,
  imports: [ThreeColumnMedia],
  templateUrl: './hero-aboutus-section.html',
  styleUrl: './hero-aboutus-section.css',
})
export class HeroAboutusSection {
  readonly title = 'Sobre nosotros';
  readonly subtitle = 'Compartimos nuestra actividad pública, apariciones en prensa y contribuciones al sector de la ingeniería de software y la innovación.';

  readonly mediaItems: MediaItem[] = [
    {
      src: '/assets/images/about-us/sobre nosotros 1.png',
      alt: 'Equipo de Táctica TIC trabajando',
      type: 'image'
    },
    {
      src: '/assets/Videos/aboutus.mp4',
      type: 'video'
    },
    {
      src: '/assets/images/about-us/sobre nosotros 3.png',
      alt: 'Espacio de trabajo de Táctica TIC',
      type: 'image'
    }
  ];
}
