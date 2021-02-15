import { Component } from '@angular/core';
import { ColorDirective } from './color.directive';
@Component({template:`
<p appColor="yellow">text1</p>
<p appColor>text2</p>
`})
class HostComponent{

}
describe('ColorDirective', () => {

  beforeEach((=>{
    TestBed.configureTestingModule({
      declarations:[ColorDirective,HostComponent]
    })
    fixture=TestBed.createComponent(HostComponent)
    fixture.detectChanges()
  }))
  it('should create an instance', () => {
    const directive = new ColorDirective();
    expect(directive).toBeTruthy();
  });
  it("should apply input color",()=>{
    let de=fixture.debugElement.queryAll(By.css(('p')))[0]

    expect(de.nativeElement.style.backgroundCOlor).toBe('yellow')
  })
  it("should apply default color",()=>{
    let de=fixture.debugElement.queryAll(By.css(('p')))[1]
    let directive =de.injector.get(ColorDirective)
    expect(de.nativeElement.style.backgroundCOlor).toBe(directive.defaultColor)
  })
});
