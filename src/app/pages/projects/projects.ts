import { Component } from '@angular/core';
import { ProjectsSection } from '../../components/sections/projects-section/projects-section';  
@Component({
  selector: 'app-projects',
  imports: [ProjectsSection],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
