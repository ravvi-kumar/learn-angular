import { Component } from '@angular/core';
import { observe } from '../utils/observables';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isDisabled = false;
  constructor() {
    observe.subscribe(this.handleUpdate);
  }
  handleClick() {
    this.isDisabled = true;
  }

  data = {
    randomName: Math.random().toString(36).slice(2),
    randomAge: Math.floor(Math.random() * 50) + 20,
    randomImage: 'https://picsum.photos/200/200',
  };

  handleUpdate(updatedData: any) {
    console.log('new Data in home', updatedData);
  }
  sendData() {
    observe.execute('this is updated data from home. Sukhi');
  }
}
