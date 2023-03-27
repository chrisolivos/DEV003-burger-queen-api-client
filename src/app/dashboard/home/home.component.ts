import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuOpened:Boolean=true;
  toggleMenu(): void{
  this.isMenuOpened=!this.isMenuOpened;
}
}
