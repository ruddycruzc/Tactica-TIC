import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-job-openings-section',
  standalone: true,
  imports: [AppButtonComponent, NgFor], 
  templateUrl: './job-openings-section.html',
  styleUrl: './job-openings-section.css'
})
export class JobOpeningsSection {
  readonly cultureCards = [
    {
      imgSrc: '/assets/images/i4.jpeg',
      altText: 'Atracción de Nuevo Talento',
      title: 'Atracción de Nuevo Talento',
      description: 'Buscamos mentes inquietas, profesionales de la ingeniería y apasionados del ecosistema digital que quieran desarrollar una carrera profesional sólida y dinámica. Creamos un entorno diáfano y atractivo idóneo para perfiles jóvenes y experimentados que deseen aportar frescura y soluciones reales al sector tecnológico.'
    },
    {
      imgSrc: '/assets/images/i5.jpeg',
      altText: 'Reconocimiento y Esfuerzo',
      title: 'Reconocimiento y Esfuerzo',
      description: 'Creemos firmemente en una cultura corporativa que premia el esfuerzo, la flexibilidad y el compromiso mutuo. Aquí, "hacer tecnología" significa mancharse las manos en equipo; por ello, fomentamos un ambiente de trabajo saludable donde el rendimiento y la implicación directa se traducen en oportunidades reales de crecimiento y promoción interna.'
    },
    {
      imgSrc: '/assets/images/i6.jpeg',
      altText: 'Vanguardia e Innovación Activa',
      title: 'Vanguardia e Innovación Activa',
      description: 'El sector tecnológico avanza a pasos agigantados. Para mantenernos competitivos, nuestro equipo participa activamente en proyectos de I+D+i, formación continua y adopción de metodologías emergentes. Estar actualizados no es una opción, es nuestra esencia para diseñar el software robusto y eficiente que el mercado exige.'
    }
  ];
}
