import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[numeric]'
})

export class NumericDirective {

  @Input('decimals') decimals: number = 0;

  private check(value: string, decimals: number) {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$"
      return String(value).match(new RegExp(regExpString));
    }
  }

  private specialKeys = [
    'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
  ];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    let position: number = this.el.nativeElement.selectionStart;
    let next: string = [current.slice(0, position), event.key, current.slice(position)].join('');

    if (next && !this.check(next, this.decimals)) {
      event.preventDefault();
    }
  }
}

@Directive({ selector: "[autoFocus]" })
export class AutoFocusDirective implements OnInit {
    @Input("autoFocus") isFocused: boolean;
    constructor(private hostElement: ElementRef, private renderer: Renderer2) { }
    ngOnInit(): void {
        if (this.isFocused) {
            this.hostElement.nativeElement.focus();
        }
    }
}
