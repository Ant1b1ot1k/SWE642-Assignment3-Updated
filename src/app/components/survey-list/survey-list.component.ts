// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This code defines an Angular component called "ListComponent" which initializes an empty array to hold survey data and subscribes to the observable returned by a service 
// called "SurveydataService". The service makes an HTTP GET request to retrieve survey data from a server, and when the data is returned, 
// it is assigned to the surveydata array in the component.

// Importing necessary modules and services
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HTTP client module for making HTTP requests
import { SurveyData } from 'src/app/models/survey-data'; // Importing the survey data model
import { SurveydataService } from 'src/app/services/surveydata.service'; // Importing the survey data service

// Component decorator with metadata
@Component({
  selector: 'app-list',
  templateUrl: './survey-list.component.html', // HTML template file for this component
  styleUrls: ['./survey-list.component.css'] // CSS stylesheet file for this component
})

export class ListComponent implements OnInit {

  surveydata: SurveyData[] = []; // Initializing an empty array to hold survey data

  constructor(private _surveydataService: SurveydataService) { } // Injecting the survey data service

  ngOnInit(): void {
    // Subscribing to the observable returned by the getFormData() method in the survey data service
    // This method returns an array of survey data objects
    // When the data is returned from the server, it is assigned to the surveydata array in this component
    this._surveydataService.getFormData().subscribe(
      data => this.surveydata = data
    )
  }
}
