// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This code defines the HomeComponent class in an Angular application, which implements the OnInit interface. 
// It also defines metadata for the component, including the HTML template location and CSS style files. 
// The constructor function is empty, and the ngOnInit() lifecycle hook is implemented but does not have any functionality.

// Import necessary dependencies from Angular core library
import { Component, OnInit } from '@angular/core';

// Define the metadata for the HomeComponent
@Component({
  selector: 'app-home', // HTML element selector used to embed the component in a parent component
  templateUrl: './home.component.html', // the location of the component's HTML template file
  styleUrls: ['./home.component.css'] // an array of locations for the component's CSS style files
})

// Create the HomeComponent class and implement the OnInit interface
export class HomeComponent implements OnInit {

  // Constructor function that is executed when a new instance of the HomeComponent is created
  constructor() { }

  // Lifecycle hook that is called after the component's data-bound properties have been initialized
  ngOnInit(): void {
  }
  
}