import { Component } from '@angular/core';

import { TypewriterText } from '../../ui/text/typewriter-text/typewriter-text';

@Component({
  selector: 'app-text-info-section',
  standalone: true,
  imports: [TypewriterText],
  templateUrl: './text-info-section.html',
  styleUrl: './text-info-section.css',
})
export class TextInfoSection {
  readonly statement = 'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.';
}
