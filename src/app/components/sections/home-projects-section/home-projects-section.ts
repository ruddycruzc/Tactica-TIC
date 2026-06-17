import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';
import { Component } from '@angular/core';
import { ProjectCard } from '../../ui/cards/project-card/project-card';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

type HomeProject = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-home-projects-section',
  standalone: true,
  imports: [AppButtonComponent, ProjectCard, ScrollRevealDirective],
  templateUrl: './home-projects-section.html',
  styleUrl: './home-projects-section.css',
})
export class HomeProjectsSection {
  readonly projects: HomeProject[] = [
    {
      title: 'MINIASSIST',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/home-projects/image-2.png',
    },
    {
      title: 'MINIBAI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/home-projects/image-1.png',
    },
    {
      title: 'Smartcrane II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/home-projects/image.png',
    },
  ];
}
