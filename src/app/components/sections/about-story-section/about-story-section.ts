import { Component } from '@angular/core';

import { InfoLeftImage } from '../../info-blocks/info-left-image/info-left-image';
import { IconInfo } from '../../ui/cards/icon-info/icon-info';

@Component({
  selector: 'app-about-story-section',
  standalone: true,
  imports: [InfoLeftImage, IconInfo],
  templateUrl: './about-story-section.html',
  styleUrl: './about-story-section.css',
})
export class AboutStorySection {
  readonly title = 'Quiénes';
  readonly titleHighlight = 'somos';

  readonly story = {
    title: 'Nuestra historia',
    description: 'En 2016 asumimos un reto que nos ilusionaba y nos ponía a prueba: fundar una empresa tecnológica diferente. Nuestro objetivo era claro: ser el aliado estratégico que ayudara a otras empresas a evolucionar. Hoy mantenemos esa esencia forjada en la experiencia, el rigor y la pasión por crear software robusto, ético y eficiente.',
    mediaSrc: '/assets/images/about-us/Foto sobe nsootros 4.png',
    mediaAlt: 'Equipo conversando sobre un proyecto digital'
  };

  readonly infoItems = [
    {
      icon: '/assets/icons/solar_eye-linear.svg',
      title: 'Nuestra visión',
      description: 'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.'
    },
    {
      icon: '/assets/icons/pajamas_issue-type-objective.svg',
      title: 'Visión',
      description: 'Tratamos cada línea de desarrollo con la responsabilidad moral que merece el impacto comunitario.'
    }
  ];
}
