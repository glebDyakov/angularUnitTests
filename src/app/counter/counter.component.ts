import {Component} from '@angular/core'
@Component({
  selector :'app-counter',
  template:`Counter:{{counter}}`
})

export class CounterComponent{
  counter=0
  form:FormGroup
  constructor(private fb:FormBuilder){
    this.form=fb.group({
      login:['',Validators.required],
      password:[''],
    })
  }
  @Output() counterEmitter=new EventEmitter<number>()
  increment(){
    this.counter++
    this.counterEmitter.emit(this.counter)
  }
  decrement(){
    this.counter++
  }

}
