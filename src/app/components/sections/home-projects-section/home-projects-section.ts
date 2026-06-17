import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';
import { ProjectCard } from '../../ui/cards/project-card/project-card';

type HomeProject = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-home-projects-section',
  standalone: true,
  imports: [AppButtonComponent, ProjectCard],
  templateUrl: './home-projects-section.html',
  styleUrl: './home-projects-section.css',
})
export class HomeProjectsSection implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private revealObserver: IntersectionObserver | null = null;

  isVisible = false;

  readonly projects: HomeProject[] = [
    {
      title: 'MINIASSIST',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/home-projects/image-2.png',
    },
    {
      title: 'MINIBAI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/home-projects/image-1.png',
    },
    {
      title: 'Smartcrane II',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/home-projects/image.png',
    },
  ];

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.isVisible = true;
      return;
    }

    this.revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.isVisible = true;
        this.revealObserver?.disconnect();
        this.revealObserver = null;
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -14% 0px',
      }
    );

    this.revealObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
