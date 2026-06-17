import { Component } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';

import { PROJECTS }
from '../../../data/projects/projects.data';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection {

  readonly projects = PROJECTS;

}