import { Component } from '@angular/core';

import { InfoLeft } from '../../info-blocks/info-left/info-left';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-info-left-section',
  standalone: true,
  imports: [InfoLeft,TranslateModule],
  templateUrl: './info-left-section.html',
  styleUrl: './info-left-section.css',
})
export class InfoLeftSection {

  readonly title =
    'HOME.INFO_LEFT.TITLE';

  readonly paragraphs = [
    'HOME.INFO_LEFT.PARAGRAPHS.PARAGRAPH_1',
    'HOME.INFO_LEFT.PARAGRAPHS.PARAGRAPH_2'
  ];

  readonly buttonLabel =
    'HOME.INFO_LEFT.BUTTON_LABEL';

  readonly buttonLink =
    '/about';

  readonly image =
    '/assets/images/info-left/Rectangle 8.png';

  readonly imageAlt =
    'HOME.INFO_LEFT.IMAGE_ALT';

  readonly cardTitle =
    'HOME.INFO_LEFT.CARD.TITLE';

  readonly cardEmphasis =
    'HOME.INFO_LEFT.CARD.EMPHASIS';

  readonly cardButtonLabel =
    'HOME.INFO_LEFT.CARD.BUTTON_LABEL';

  readonly cardButtonLink =
    '/contact';
}
