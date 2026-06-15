import { Component, Input } from '@angular/core';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-info-left-image',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './info-left-image.html',
  styleUrl: './info-left-image.css',
})
export class InfoLeftImage {
  @Input() title = '';
  @Input() description = '';
  @Input() mediaSrc = '';
  @Input() mediaAlt = '';
  @Input() mediaType: 'image' | 'video' = 'image';
  @Input() buttonLabel = '';
  @Input() buttonLink = '/contact';
}
