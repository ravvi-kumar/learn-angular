import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isDisabled = false;
  handleClick() {
    this.isDisabled = true;
  }

  data = {
    randomName: Math.random().toString(36).slice(2),
    randomAge: Math.floor(Math.random() * 50) + 20,
    randomImage: 'https://picsum.photos/200/200',
  };
}
