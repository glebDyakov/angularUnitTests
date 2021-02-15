import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { RoutingComponent } from './routing.component';

class RouterStub{
  navigate(path:string[]){

  }

}
class ActivatedRouteStub{
  //  params:Observable<Params>
  get params(){
    return this.subject.asObservable()
  }
  private subject=new Subject()
  push(params:Params){
    this.subject.next(params)
  }
}
describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports:[RouterTestingModule],
      schemas:[NO_ERRORS_SCHEMA]
      providers:[{provide:Router,useClass:RouterStub},{provide:ActivatedRoute,useClass:ActivatedRouteStub},]
    })

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
  it('should navigate to posts if go back', () => {
    let router=TestBed.get(Router)
    let spy=spyOn(router,'navigate')
    component.goBack()
    expect(spy).toHaveBeenCalledWith(['/posts']))
  });
  it('should navigate to 404 if id = 0', () => {
    let router=TestBed.get(Router)
    let route:ActivatedRouteStub=TestBed.get(ActivatedRoute)

    let spy=spyOn(router,'navigate')
    // component.goBack()
    route.push({id:'0'})
    expect(spy).toHaveBeenCalledWith(['/404']))
  });
  it('should have  router-outlet directive', () => {
    let de=fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull()
  });


});
