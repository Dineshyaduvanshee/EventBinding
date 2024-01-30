import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';
  showData(){
    console.log("Event Binding Example......");
    console.warn("Event Binding Example......");
     
  }
  show(){
    alert("Event Binding Example");
  }
}
