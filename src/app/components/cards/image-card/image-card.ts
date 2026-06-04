import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.html',
  styleUrl: './image-card.css',
})
export class ImageCard {
  @Input() image = '';
  @Input() title = 'Título de la tarjeta';
  @Input() description = 'Descripción de la tarjeta o subtítulo breve.';
  @Input() hoverDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
