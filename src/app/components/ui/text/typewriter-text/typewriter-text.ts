import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from '@angular/core';

export type TypewriterTextSegment = {
  text: string;
  tone?: 'muted' | 'strong';
};

@Component({
  selector: 'app-typewriter-text',
  standalone: true,
  templateUrl: './typewriter-text.html',
  styleUrl: './typewriter-text.css',
})
export class TypewriterText implements AfterViewInit, OnChanges, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private observer: IntersectionObserver | null = null;
  private timerId: number | null = null;
  private pollId: number | null = null;
  private hasPlayed = false;
  private observedElement: HTMLElement | null = null;

  @Input() text = '';
  @Input() segments: TypewriterTextSegment[] = [];
  @Input() speed = 20;

  displayText = '';
  visibleCharacters = 0;

  get renderedSegments(): TypewriterTextSegment[] {
    let remaining = this.visibleCharacters;

    return this.sourceSegments.map((segment) => {
      const length = Array.from(segment.text).length;
      const text = Array.from(segment.text).slice(0, Math.max(0, remaining)).join('');
      remaining -= length;

      return {
        ...segment,
        text,
      };
    });
  }

  private get sourceSegments(): TypewriterTextSegment[] {
    return this.segments.length ? this.segments : [{ text: this.text }];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['text'] && !changes['segments']) {
      return;
    }

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }

    if (this.hasPlayed) {
      const fullText =
        this.sourceSegments.map((segment) => segment.text).join('');

      this.visibleCharacters = Array.from(fullText).length;
      this.displayText = fullText;
      return;
    }

    this.visibleCharacters = 0;
    this.displayText = '';
  }

  ngAfterViewInit(): void {
    this.observedElement =
      this.elementRef.nativeElement.closest('.text-info') as HTMLElement | null
      ?? this.elementRef.nativeElement;

    this.observer = new IntersectionObserver(() => this.tryStart(), {
      rootMargin: '0px 0px -28% 0px',
      threshold: 0.18,
    });

    this.observer.observe(this.observedElement);
    window.requestAnimationFrame(() => this.tryStart());
    this.pollId = window.setInterval(() => this.tryStart(), 150);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    if (this.pollId !== null) {
      window.clearInterval(this.pollId);
    }
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.tryStart();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.tryStart();
  }

  private tryStart(): void {
    if (this.hasPlayed || !this.isInStartRange()) {
      return;
    }

    this.hasPlayed = true;
    if (this.pollId !== null) {
      window.clearInterval(this.pollId);
      this.pollId = null;
    }
    this.startTyping();
    this.observer?.disconnect();
  }

  private isInStartRange(): boolean {
    const bounds = (this.observedElement ?? this.elementRef.nativeElement).getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return bounds.top <= viewportHeight * 0.72 && bounds.bottom >= viewportHeight * 0.12;
  }

  private startTyping(): void {
    let index = 0;
    const characters = Array.from(this.sourceSegments.map((segment) => segment.text).join(''));

    this.timerId = window.setInterval(() => {
      this.visibleCharacters = index + 1;
      this.displayText = characters.slice(0, this.visibleCharacters).join('');
      this.changeDetectorRef.detectChanges();
      index += 1;

      if (index >= characters.length && this.timerId !== null) {
        window.clearInterval(this.timerId);
        this.timerId = null;
      }
    }, this.speed);
  }
}
