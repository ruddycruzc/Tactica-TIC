import { Component } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { BlogPost } from '../../../interfaces/blog-section.interface';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css'
})
export class BlogSectionComponent {
  readonly posts: BlogPost[] = [
    {
      badge: 'Prensa Escrita',
      title: 'Táctica TIC, técnologia innovadora para la transformación digital de empresas',
      excerpt: 'Gracias a la inteligencia artificial, la visión por computador y la programación, Táctica TIC ha logrado optimizar los procesos y aumentar la productividad de empresas grandes y pequeñas. «Hacemos tecnología manchándonos las manos», aseguran',
      url: 'https://www.lavozdeasturias.es/noticia/asturias/2022/03/14/tactica-tic-tecnologia-innovadora-transformacion-digital-empresas/00031647268285891412110.htm'
    },
    {
      badge: 'Prensa Escrita',
      title: 'La empresa asturiana TÁCTICA TIC, premio ANCES Open Innova 2021',
      excerpt: 'La empresa asturiana Táctica Tic ha sido una de las galardonadas en el programa nacional Ances Open Innovation, que ha fallado esta mañana sus premios anuales en una gala online. La compañía, que también obtuvo un premio el pasado año, presentó una propuesta al reto lanzado por la compañía ICCS Contact.',
      url: 'https://www.elcomercio.es/tecnologia/asturias-innova/empresa-asturiana-tactica-tic-premio-ances-open-innova-20210527193517-nt.html'
    },
    {
      badge: 'Prensa Escrita',
      title: 'TÁCTICA TIC, una gran casona para la economía verde en Gijón Oeste',
      excerpt: 'La empresa Táctica Tic, ubicada en la Quinta desde su apertura, es el claro ejemplo de la importancia que tiene para los emprendedores disponer de un espacio municipal a su disposición donde poder no solo dar los primeros pasos, sino ir creciendo hasta convertirse en una compañía de referencia...',
      url: 'https://www.lne.es/gijon/gijon-oeste/2024/12/14/gran-casona-economia-verde-gijon-112539974.html'
    }
  ];
}