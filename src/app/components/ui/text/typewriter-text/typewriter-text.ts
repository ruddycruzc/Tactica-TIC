import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-typewriter-text',
  standalone: true,
  templateUrl: './typewriter-text.html',
  styleUrl: './typewriter-text.css',
})
export class TypewriterText implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer: IntersectionObserver | null = null;
  private timerId: number | null = null;
  private hasPlayed = false;

  @Input() text = '';
  @Input() speed = 18;

  displayText = '';

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || this.hasPlayed) {
        return;
      }

      this.hasPlayed = true;
      this.startTyping();
      this.observer?.disconnect();
    }, { threshold: 0.35 });

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  private startTyping(): void {
    let index = 0;
    const characters = Array.from(this.text);

    this.timerId = window.setInterval(() => {
      this.displayText = characters.slice(0, index + 1).join('');
      index += 1;

      if (index >= characters.length && this.timerId !== null) {
        window.clearInterval(this.timerId);
        this.timerId = null;
      }
    }, this.speed);
  }
}
