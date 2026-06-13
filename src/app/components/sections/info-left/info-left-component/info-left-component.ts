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
  @Input() title = '';
  @Input() paragraphs: string[] = [];
  @Input() buttonLabel = '';
  @Input() buttonLink = '/about';
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() cardTitle = '';
  @Input() cardButtonLabel = '';
  @Input() cardButtonLink = '/contact';
}
