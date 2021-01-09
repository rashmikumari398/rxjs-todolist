import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userAction from './user.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-todolist';
  result:string[]=[];

  constructor(private store:Store<any>){

  }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.result = state.result.result;
    })

  }

  add(){
    const item = document.getElementById('ipt') as HTMLInputElement
    console.log(item.value)

    this.store.dispatch(new userAction.Additem(item.value))

  }

  deleteitem(index:number){
    console.log(index);
    this.store.dispatch(new userAction.Deleteitem(index))
  }
  deletelist(){
    this.store.dispatch(new userAction.Deletelist())
  }
}
