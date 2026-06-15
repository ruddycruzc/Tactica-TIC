import { Component } from '@angular/core';

import { InfoLeft } from '../../info-blocks/info-left/info-left';

@Component({
  selector: 'app-info-left-section',
  standalone: true,
  imports: [InfoLeft],
  templateUrl: './info-left-section.html',
  styleUrl: './info-left-section.css',
})
export class InfoLeftSection {
  readonly title = 'Liderando el cambio digital';
  readonly paragraphs = [
    'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.',
    'Tratamos cada línea de desarrollo con la responsabilidad moral que merece el impacto comunitario.'
  ];
  readonly buttonLabel = 'Conócenos';
  readonly buttonLink = '/about';
  readonly image = '/assets/images/Rectangle 8.png';
  readonly imageAlt = 'Profesional usando un ordenador';
  readonly cardTitle = '¿Puede el control de jornada mejorar la gestión laboral de tu equipo?';
  readonly cardButtonLabel = 'Conoce más';
  readonly cardButtonLink = '/contact';
}
