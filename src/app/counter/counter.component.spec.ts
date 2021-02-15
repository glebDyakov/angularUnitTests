import {TestBed} from '@angular/core/testing'
describe("CounterComponent",()=>{
  // let component:CounterComponent
  // beforeEach(()=>{
  //   component =new CounterComponent(new FormBuilder())
  // })

  // it('should increment counter by 1',()=>{

  //   component.increment()
  //   expect(component.counter).toBe(1)
  // })
  // xit('should decrement counter by 1',()=>{

  //   component.decrement()
  //   expect(component.counter).toBe(-1)
  // })
  // it('should increment value by eventEmitter',()=>{
  //   let result=null
  //   component.counterEmmiter.subscribe(v=>result=v)
  //   component.increment()
  //   expect(result).toBe(1)
  // })
  // it('should create form with 2 controls',()=>{
  //   expect(component.form.contains('login')).toBe(true)
  //   expect(component.form.contains('password')).toBeTruthy()
  // }),
  // it('should mark login as invalid  if empty value',()=>{
  //   const control=component.form.get('login')
  //   control.setValue("")
  //   expect(control.valid).toBeFalsy()
  // })
  let component:CounterComponent
  let fixture:CounterFixture<CounterComponent>
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[CounterComponent]
    })
    fixture=TestBed.createComponent(CounterComponent)
    component=fixture.componentInstance
  })
  it("should be create",()=>{
    expect(component).toBeDefined()
  })
  it("should render counter property",()=>{
    let num=42
    component.counter=num
    fixture.detectChanges()
    let de=fixture.debugElement.query(By.css('.counter'))
    let el:HTMLElement=de.nativeElement
    expect(el.textContent).toContain(num.toString())
  })
  it("should add green class if counter is even",()=>{
    let num=42
    component.counter=6
    fixture.detectChanges()
    let de=fixture.debugElement.query(By.css('.counter'))
    let el:HTMLElement=de.nativeElement
    expect(el.classList.contains('green')).toBeTruthy()
  })
  it("should increment counter if incremnt button was clcked",()=>{
    let btn=fixture.debugElement.query(By.css('#increment'))
    btn.triggerEventHandler('click',null)
    expect(component.counter).toBe(1)
  })
})
