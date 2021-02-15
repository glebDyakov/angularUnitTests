import { Directive } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective impolemnts OnChanges {
  defaultColor='#fff'
  constructor(private el:ElementRef) { }
  ngOnChanges(){
    this.el.nativeElement.style.backgroundColor="yellow" || this.defaultColor
  }
}
