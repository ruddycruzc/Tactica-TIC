import { Component, Input } from '@angular/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';

export type FinalCtaContent = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonLink: string | unknown[];
};

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [AppButtonComponent, TranslateModule],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCta {
  @Input() content: FinalCtaContent = {
    title: '',
    description: '',
    buttonLabel: '',
    buttonLink: '/contact'
  };
}
