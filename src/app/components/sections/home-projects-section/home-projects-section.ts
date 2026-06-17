import { Component } from '@angular/core';
import { PROJECTS } from '../../../data/projects/projects.data';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';
import { ProjectCard } from '../../ui/cards/project-card/project-card';
import { Projects } from '../../../pages/projects/projects';

@Component({
  selector: 'app-home-projects-section',
  standalone: true,
  imports: [AppButtonComponent, ProjectCard],
  templateUrl: './home-projects-section.html',
  styleUrl: './home-projects-section.css',
})
export class HomeProjectsSection {
  readonly projects: PROJECTS;
   
}
