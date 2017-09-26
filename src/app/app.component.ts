import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myObject = {
    name: 'Giftson',
    age: 24,
    occupation: 'Engineer',
    location: 'Bangalore'
  };

  myArr = [
    {
    name: 'Giftson',
    age: 24,
    occupation: 'Engineer',
    location: 'Bangalore'
  },
  {
    name: 'David',
    age: 53,
    occupation: 'Treasurer',
    location: 'Manamadurai'
  },
  {
    name: 'Shanthammal',
    age: 53,
    occupation: 'Teacher',
    location: 'Manamadurai'
  },
  {
    name: 'Roshan',
    age: 21,
    occupation: 'Doctor',
    location: 'Philippines'
  }
];

}
