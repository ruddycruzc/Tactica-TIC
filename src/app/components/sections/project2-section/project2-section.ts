import { Component } from '@angular/core';

import { Project2 } from '../../ui/cards/project2/project2';

type Project2Item = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-project2-section',
  standalone: true,
  imports: [Project2],
  templateUrl: './project2-section.html',
  styleUrl: './project2-section.css'
})
export class Project2Section {
  readonly cards: Project2Item[] = [
    {
      image: '/assets/images/case-image/case1.jpeg',
      imageAlt: 'Solución de control industrial',
      title: 'Descubre TIC',
      description: 'Conectamos datos, equipos y personas para que cada proceso sea más eficiente.'
    },
    {
      image: '/assets/images/case-image/case2.jpeg',
      imageAlt: 'Equipo revisando datos',
      title: 'Descubre TIC',
      description: 'Aplicamos automatización e inteligencia artificial donde aporta valor real.'
    },
    {
      image: '/assets/images/case-image/case3.jpeg',
      imageAlt: 'Tecnología industrial conectada',
      title: 'Descubre TIC',
      description: 'Diseñamos software a medida para decidir mejor, antes y con más precisión.'
    }
  ];
}
