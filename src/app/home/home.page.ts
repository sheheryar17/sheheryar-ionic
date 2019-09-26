import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Making an object
  user = {
    name: 'Sheheryar Afzal',
    city: 'Islamabad',
    interests: ['Coding', ' Cricket', ' Sketching', ' Reading', ' Movies', ' Traveling']
  };

  constructor() {}

}
