import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kleiver-first-app';
  welcomeText: string = "Hola q hace?";
  counter: number = 0;
  buttonText: string = "butoniando...";

  doSomething(event: any) {
    this.welcomeText = "Viendo televisión " + this.counter;
    this.counter++;
  }
}
