// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This is an Angular component that defines a form for a survey, including checkboxes for different survey options. 
// It uses an instance of SurveydataService to save the form data and then navigates to the survey list component.

// Import required modules and components from Angular
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import SurveyData model and SurveydataService service
import { SurveyData } from 'src/app/models/survey-data';
import { SurveydataService } from 'src/app/services/surveydata.service';

// Component decorator with selector, templateUrl and styleUrls properties
@Component({
  selector: 'app-form',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

// SurveyComponent class implementing OnInit interface
export class SurveyComponent implements OnInit{

  // checkboxesDataList property containing array of checkbox options
  checkboxesDataList = [
    {
      label: 'Students',
      isChecked: false
    },
    {
      label: 'Location',
      isChecked: false
    },
    {
      label: 'Campus',
      isChecked: false
    },
    {
      label: 'Atmosphere',
      isChecked: false
    },
    {
      label: 'Dorm Rooms',
      isChecked: false
    },
    {
      label: 'Sports',
      isChecked: false
    }
  ];

  // formData property initialized with new SurveyData object
  formData: SurveyData = new SurveyData()

  // Constructor with injection of SurveydataService and Router dependencies
  constructor(private _surveyFormService: SurveydataService, private _router: Router) { } 

  // ngOnInit method to be executed on component initialization
  ngOnInit(): void{

  }

  // saveData method to save form data when the form is submitted
  saveData() {

    // Filter checked checkbox options and map to label values
    const checkboxValues = this.checkboxesDataList.filter((item) => item.isChecked).map((option) => option.label);
    // Set checkbox values to formData property
    this.formData.checkboxValues = checkboxValues;

    // Call saveFormData method of SurveydataService with formData object and handle response
    this._surveyFormService.saveFormData(this.formData).subscribe(
      data => {
        console.log('response',data);
        this._router.navigateByUrl("/survey-list"); // Navigate to survey-list component
      }
    )
  }
}
