import { Component, Input } from '@angular/core';

import { AppButtonComponent } from '../../../ui/buttons/app-button/app-button.component';
import { BackgroundColorInfoCard } from '../../../ui/cards/background-color-info-card/background-color-info-card';

@Component({
  selector: 'app-info-left-component',
  standalone: true,
  imports: [
    AppButtonComponent,
    BackgroundColorInfoCard
  ],
  templateUrl: './info-left-component.html',
  styleUrl: './info-left-component.css',
})
export class InfoLeftComponent {
  @Input() title = 'Liderando el cambio digital';
  @Input() paragraphs: string[] = [
    'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.',
    'Tratamos cada línea de desarrollo con la responsabilidad moral que merece el impacto comunitario.'
  ];
  @Input() buttonLabel = 'Conócenos';
  @Input() buttonLink = '/about';
  @Input() image = '/assets/images/Rectangle 8.png';
  @Input() imageAlt = 'Profesional usando un ordenador';
  @Input() cardTitle = '¿Puede el control de jornada mejorar la gestión laboral de tu equipo?';
  @Input() cardButtonLabel = 'Conoce más';
  @Input() cardButtonLink = '/contact';
}
