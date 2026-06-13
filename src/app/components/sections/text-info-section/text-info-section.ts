import { Component } from '@angular/core';

import { TypewriterText, TypewriterTextSegment } from '../../ui/text/typewriter-text/typewriter-text';

@Component({
  selector: 'app-text-info-section',
  standalone: true,
  imports: [TypewriterText],
  templateUrl: './text-info-section.html',
  styleUrl: './text-info-section.css',
})
export class TextInfoSection {
  readonly statement = 'Transformamos procesos industriales conectando inteligencia artificial, IoT, visión artificial y software a medida para ayudar a las empresas a controlar, automatizar y tomar mejores decisiones.';
  readonly statementSegments: TypewriterTextSegment[] = [
    { text: 'Transformamos procesos industriales conectando ', tone: 'muted' },
    { text: 'inteligencia artificial, IoT, visión artificial y software a medida para ayudar a las empresas ', tone: 'strong' },
    { text: 'a controlar, ', tone: 'muted' },
    { text: 'automatizar', tone: 'strong' },
    { text: ' y tomar mejores decisiones.', tone: 'muted' },
  ];
}
