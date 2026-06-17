import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HeroContent } from '../../../interfaces/translations/hero-content.interface';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    AppButtonComponent,
    TranslateModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly heroContent: HeroContent = {
    titleLine1: 'HOME.HERO.TITLE_LINE_1',
    titleHighlight: 'HOME.HERO.TITLE_HIGHLIGHT',
    titleLine2: 'HOME.HERO.TITLE_LINE_2',
    description: 'HOME.HERO.DESCRIPTION',
    aboutButton: 'HOME.HERO.ABOUT_BUTTON',
    visionButton: 'HOME.HERO.VISION_BUTTON'
  };
}
