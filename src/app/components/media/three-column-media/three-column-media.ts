import { Component, Input } from '@angular/core';

import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { MediaItem } from '../../../interfaces/data/media-item.interface';

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
