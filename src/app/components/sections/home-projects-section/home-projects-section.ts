import { Component } from '@angular/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

type HomeProject = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-home-projects-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './home-projects-section.html',
  styleUrl: './home-projects-section.css',
})
export class HomeProjectsSection {
  readonly projects: HomeProject[] = [
    {
      title: 'MINIASSIST',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/image-2.png',
    },
    {
      title: 'MINIBAI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/image-1.png',
    },
    {
      title: 'Smartcrane II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/image.png',
    },
  ];
}
