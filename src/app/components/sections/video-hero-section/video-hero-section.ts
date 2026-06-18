import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

import { VideoHero } from '../../hero/video-hero/video-hero';

@Component({
  selector: 'app-video-hero-section',
  standalone: true,
  imports: [VideoHero],
  templateUrl: './video-hero-section.html',
  styleUrl: './video-hero-section.css',
})
export class VideoHeroSection implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private animationFrame: number | null = null;

  scrollProgress = 0;
  revealScale = 0.68;
  revealOffset = '2.75rem';
  revealOpacity = 0.92;

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
