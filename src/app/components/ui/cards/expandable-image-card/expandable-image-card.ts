import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-image-card',
  standalone: true,
  templateUrl: './expandable-image-card.html',
  styleUrl: './expandable-image-card.css',
})
export class ExpandableImageCard {
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input({ required: true }) image = '';
  @Input() imageAlt = '';
  @Input() expanded = false;
}
