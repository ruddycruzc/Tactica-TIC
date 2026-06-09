import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../../../interfaces/services-section.interface';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSection {
  services: ServiceCard[] = [
    {
      title: 'Ingeniería de Software',
      description: 'Construcción y desarrollo de sistemas de software propios, claros y eficientes.',
      features: ['Desarrollo de Sistemas Propios', 'Arquitecturas Robustas']
    },
    {
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para optimizar los recursos internos.',
      features: ['Estrategia Digital', 'Optimización de Infraestructura']
    },
    {
      title: 'Estrategia y Crecimiento',
      description: 'Impulso de la marca a través de la transparencia pública y la cultura corporativa.',
      features: ['Promoción Orgánica', 'Atracción de Talento']
    }
  ];
}