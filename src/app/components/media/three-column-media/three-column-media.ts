import { Component, Input } from '@angular/core';

import { MediaItem } from '../../../interfaces/media-item.interface';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-three-column-media',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './three-column-media.html',
  styleUrl: './three-column-media.css',
})
export class ThreeColumnMedia {
  @Input() items: MediaItem[] = [];
}
