import { Component } from '@angular/core';

import { FinalCta, FinalCtaContent } from '../../info-blocks/final-cta/final-cta';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [FinalCta],
  templateUrl: './final-cta-section.html',
  styleUrl: './final-cta-section.css',
})
export class FinalCtaSection {
  readonly ctaContent: FinalCtaContent = {
    title: 'Transforma el potencial de tu negocio con nosotros',
    description: '',
    buttonLabel: 'Contáctanos',
    buttonLink: '/contact'
  };
}
