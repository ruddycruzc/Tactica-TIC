import { Component } from '@angular/core';
import { AboutSection } from '../../components/sections/about-section/about-section';
import { ClientsSection } from '../../components/sections/clients-section/clients-section';
@Component({
  selector: 'app-about',
  imports: [AboutSection,ClientsSection],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
