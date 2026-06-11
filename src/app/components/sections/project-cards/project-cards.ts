import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ProjectCardItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.css'
})
export class ProjectCards {
  activeIndex = 0;

  readonly cards: ProjectCardItem[] = [
    {
      title: 'MINIASSIST',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/case-image/case1.jpeg',
      imageAlt: 'Edificio industrial del proyecto MINIASSIST'
    },
    {
      title: 'MINIASSIST',
      description:
        'Automatización, datos e inteligencia artificial para procesos industriales más conectados.',
      image: '/assets/images/case-image/case2.jpeg',
      imageAlt: 'Persona revisando datos en una tableta'
    },
    {
      title: 'MINIASSIST',
      description:
        'Soluciones digitales a medida para controlar, medir y decidir con mayor precisión.',
      image: '/assets/images/case-image/case3.jpeg',
      imageAlt: 'Equipo trabajando con tecnología industrial'
    }
  ];

  selectCard(index: number): void {
    this.activeIndex = index;
  }
}
