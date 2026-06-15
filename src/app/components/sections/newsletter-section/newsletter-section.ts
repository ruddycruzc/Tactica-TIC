import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';
import { HubItem } from '../../../interfaces/newsletter-section.interface';

@Component({
  selector: 'app-newsletter-section',
  standalone: true,
  imports: [AppButtonComponent, NgFor],
  templateUrl: './newsletter-section.html',
  styleUrl: './newsletter-section.css'
})
export class NewsletterSection {
  readonly hubItems: HubItem[] = [
    {
      cssClass: 'item-linkedin',
      title: 'Área Profesional',
      description: 'Ofertas de empleo, artículos de software e ingeniería de vanguardia.',
      buttonVariant: 'primary', // <-- TypeScript validará que es correcto
      link: 'https://www.linkedin.com/company/tactica-tic/',
      buttonText: 'Seguir en LinkedIn'
    },
    {
      cssClass: 'item-instagram',
      title: 'Cultura & Equipo',
      description: 'Echa un vistazo a nuestros eventos, el día a día en la oficina y ambiente real.',
      buttonVariant: 'primary', // <-- TypeScript validará que es correcto
      link: 'https://www.instagram.com/tactica_tic/',
      buttonText: 'Ver en Instagram'
    }
  ];
}
