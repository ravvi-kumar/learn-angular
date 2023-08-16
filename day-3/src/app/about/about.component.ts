import { Component } from '@angular/core';
import { observe } from '../utils/observables';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor() {
    observe.subscribe(this.handleUpdate);
  }

  handleUpdate(updatedData: any) {
    console.log('new Data in about', updatedData);
  }

  sendDataFromAbout() {
    observe.execute('new Data from about component. Rajvir');
  }
}
