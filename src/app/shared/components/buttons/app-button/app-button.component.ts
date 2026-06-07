import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

export type AppButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type AppButtonType = 'button' | 'submit' | 'reset';
export type AppButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
})
export class AppButtonComponent {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly router = inject(Router);

  @Input() variant: AppButtonVariant = 'primary';
  @Input() type: AppButtonType = 'button';
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) fullWidth = false;
  @Input() size: AppButtonSize = 'md';
  @Input({ transform: booleanAttribute }) iconOnly = false;
  @Input() href: string | null = null;
  @Input() routerLink: string | unknown[] | null = null;
  @Input() target: string | null = null;
  @Input() rel: string | null = null;
  @Input() ariaLabel: string | null = null;

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  @HostBinding('class')
  get classes(): string {
    return [
      'app-button',
      `app-button--${this.variant}`,
      `app-button--${this.size}`,
      this.fullWidth ? 'app-button--full' : '',
      this.iconOnly ? 'app-button--icon-only' : '',
      this.disabled ? 'app-button--disabled' : '',
    ].filter(Boolean).join(' ');
  }

  @HostBinding('attr.role')
  get role(): 'button' | 'link' {
    return this.href || this.routerLink ? 'link' : 'button';
  }

  @HostBinding('attr.tabindex')
  get tabIndex(): number {
    return this.disabled ? -1 : 0;
  }

  @HostBinding('attr.aria-label')
  get hostAriaLabel(): string | null {
    return this.ariaLabel;
  }

  @HostBinding('attr.aria-disabled')
  get ariaDisabled(): true | null {
    return this.disabled ? true : null;
  }

  @HostBinding('attr.href')
  get hostHref(): string | null {
    return this.href;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.buttonClick.emit(event);

    if (event.defaultPrevented) {
      return;
    }

    this.runDefaultAction();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    const isEnter = event.key === 'Enter';
    const isSpaceButton = event.key === ' ' && this.role === 'button';

    if (!isEnter && !isSpaceButton) {
      return;
    }

    event.preventDefault();
    this.elementRef.nativeElement.click();
  }

  private runDefaultAction(): void {
    if (this.routerLink) {
      const commands = Array.isArray(this.routerLink) ? this.routerLink : [this.routerLink];
      void this.router.navigate(commands);
      return;
    }

    if (this.href) {
      if (this.target === '_blank') {
        window.open(this.href, this.target, 'noopener,noreferrer');
        return;
      }

      window.location.href = this.href;
      return;
    }

    const form = this.elementRef.nativeElement.closest('form');

    if (this.type === 'submit') {
      form?.requestSubmit();
      return;
    }

    if (this.type === 'reset') {
      form?.reset();
      return;
    }
  }
}
