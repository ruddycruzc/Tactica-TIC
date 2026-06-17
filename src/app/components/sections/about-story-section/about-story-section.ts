import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

import { InfoLeftImage } from '../../info-blocks/info-left-image/info-left-image';
import { IconInfo } from '../../ui/cards/icon-info/icon-info';

@Component({
  selector: 'app-about-story-section',
  standalone: true,
  imports: [InfoLeftImage, IconInfo],
  templateUrl: './about-story-section.html',
  styleUrl: './about-story-section.css',
})
export class AboutStorySection implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private animationFrame: number | null = null;

  scrollProgress = 0;
  revealScale = 0.68;
  revealOffset = '2.75rem';
  revealOpacity = 0.92;

  readonly title = 'Quiénes';
  readonly titleHighlight = 'somos';

  readonly story = {
    title: 'Nuestra historia',
    description: 'En 2016 asumimos un reto que nos ilusionaba y nos ponía a prueba: fundar una empresa tecnológica diferente. Nuestro objetivo era claro: ser el aliado estratégico que ayudara a otras empresas a evolucionar. Hoy mantenemos esa esencia forjada en la experiencia, el rigor y la pasión por crear software robusto, ético y eficiente.',
    mediaSrc: '/assets/images/about-us/Foto sobe nsootros 4.png',
    mediaAlt: 'Equipo conversando sobre un proyecto digital'
  };

  readonly infoItems = [
    {
      icon: '/assets/icons/solar_eye-linear.svg',
      title: 'Nuestra visión',
      description: 'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.'
    },
    {
      icon: '/assets/icons/pajamas_issue-type-objective.svg',
      title: 'Visión',
      description: 'Tratamos cada línea de desarrollo con la responsabilidad moral que merece el impacto comunitario.'
    }
  ];

  private readonly updateOnScroll = (): void => {
    if (this.animationFrame !== null) {
      return;
    }

    this.animationFrame = window.requestAnimationFrame(() => {
      this.animationFrame = null;
      this.updateScrollProgress();
    });
  };

  ngAfterViewInit(): void {
    this.updateScrollProgress();
    window.addEventListener('scroll', this.updateOnScroll, { passive: true });
    window.addEventListener('resize', this.updateOnScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.updateOnScroll);
    window.removeEventListener('resize', this.updateOnScroll);

    if (this.animationFrame !== null) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  private updateScrollProgress(): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const revealStart = viewportHeight * 0.95;
    const revealEnd = viewportHeight * 0.22;
    const progress = (revealStart - rect.top) / (revealStart - revealEnd);

    this.scrollProgress = Math.min(Math.max(progress, 0), 1);
    this.revealScale = 0.68 + this.scrollProgress * 0.32;
    this.revealOffset = `${(1 - this.scrollProgress) * 2.75}rem`;
    this.revealOpacity = 0.92 + this.scrollProgress * 0.08;
  }
}
