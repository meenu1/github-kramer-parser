import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDivSelect]',
  standalone: true,
})
export class HighlightDirective {
    @HostBinding('style.border') border!: string;
    @Input() status: number | undefined;
    @HostListener('click') hightlightBorder() {
        if(this.status){
            this.border = '2px solid #000';
        }
    }
}