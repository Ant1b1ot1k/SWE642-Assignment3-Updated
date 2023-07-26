// This file defines an Angular component named AppComponent, which has a metadata object that specifies the HTML template and CSS stylesheet files to be used for the component. 
// It also defines a public property title that can be bound to in the template.

// Import the Component decorator and Component symbol from the @angular/core package
import { Component } from '@angular/core';

// Apply the Component decorator to the class definition, specifying the component's metadata
@Component({
  // The CSS selector used to identify the component when it is used in HTML
  selector: 'app-root',
  // The path to the HTML template file for the component
  templateUrl: './app.component.html',
  // An array of CSS style files to apply to the component's view
  styleUrls: ['./app.component.css']
})

// Define the component class and export it for use elsewhere
export class AppComponent {

  // Declare a public property for the component that can be bound to in the template
  title = 'App';
}
