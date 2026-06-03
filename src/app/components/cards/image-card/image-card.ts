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
  @Input() name = 'Nombre Apellido';
  @Input() role = 'Desarrollador Backend Senior';
  @Input() excerpt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  @Input() details = 'Aplica metodologías DevOps y optimiza la infraestructura para cargas empresariales.';
}
