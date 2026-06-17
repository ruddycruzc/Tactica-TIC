import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

import { InfoContent } from '../../../interfaces/translations/info-content.interface';

@Component({
  selector: 'app-info-right-image',
  standalone: true,
  imports: [
    AppButtonComponent,
    TranslateModule
  ],
  templateUrl: './info-right-image.html',
  styleUrl: './info-right-image.css'
})
export class InfoRightImage {

  readonly infoContent: InfoContent = { //EL contenido modificable se encuentra en: app/src/services/translation-service/translation.ts
    tag: 'HOME.INFO.TAG',
    title: 'HOME.INFO.TITLE',
    description: 'HOME.INFO.DESCRIPTION',
    button: 'HOME.INFO.BUTTON',
    imageAlt: 'HOME.INFO.IMAGE_ALT'
  };

}