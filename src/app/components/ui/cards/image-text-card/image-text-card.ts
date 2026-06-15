import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-card',
  standalone: true,
  templateUrl: './image-text-card.html',
  styleUrl: './image-text-card.css',
})
export class ImageTextCard {
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() title = '';
  @Input() description = '';
}
