import { Component } from '@angular/core';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';
import { ProjectCard } from '../../ui/cards/project-card/project-card';
import { BlogPost } from '../../../interfaces/translations/blog-section.interface';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [AppButtonComponent, ProjectCard],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css'
})
export class BlogSectionComponent {
  readonly posts: BlogPost[] = [
    {
      image: '/assets/images/blog/blog1.png',
      imageAlt: 'Blog1',
      title: 'Táctica TIC, técnologia innovadora para la transformación digital',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.lavozdeasturias.es/noticia/asturias/2022/03/14/tactica-tic-tecnologia-innovadora-transformacion-digital-empresas/00031647268285891412110.htm'
    },
    {
      image: '/assets/images/blog/blog2.png',
      imageAlt: 'Blog2',
      title: 'La empresa asturiana TÁCTICA TIC, premio ANCES Open Innova 2021',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.elcomercio.es/tecnologia/asturias-innova/empresa-asturiana-tactica-tic-premio-ances-open-innova-20210527193517-nt.html'
    },
    {
      image: '/assets/images/blog/blog3.png',
      imageAlt: 'Blog3',
      title: 'TÁCTICA TIC, una gran casona para la economía verde en Gijón Oeste',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.lne.es/gijon/gijon-oeste/2024/12/14/gran-casona-economia-verde-gijon-112539974.html'
    },
    {
      image: '/assets/images/blog/blog1.png',
      imageAlt: 'Blog1',
      title: 'Táctica TIC, técnologia innovadora para la transformación digital',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.lavozdeasturias.es/noticia/asturias/2022/03/14/tactica-tic-tecnologia-innovadora-transformacion-digital-empresas/00031647268285891412110.htm'
    },
    {
      image: '/assets/images/blog/blog2.png',
      imageAlt: 'Blog2',
      title: 'La empresa asturiana TÁCTICA TIC, premio ANCES Open Innova 2021',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.elcomercio.es/tecnologia/asturias-innova/empresa-asturiana-tactica-tic-premio-ances-open-innova-20210527193517-nt.html'
    },
    {
      image: '/assets/images/blog/blog3.png',
      imageAlt: 'Blog3',
      title: 'TÁCTICA TIC, una gran casona para la economía verde en Gijón Oeste',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.lne.es/gijon/gijon-oeste/2024/12/14/gran-casona-economia-verde-gijon-112539974.html'
    }
  ];

  readonly indicators = [0, 1, 2, 3];
}
