//Import component from Angular
import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  //selector is a custom html element
  selector: 'app-root',
  //template and css build up the view to be called with the custom selector above
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
  

export class AppComponent {
}
