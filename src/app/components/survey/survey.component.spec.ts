// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This file contains the unit tests for the survey component. Created by default when creating a new component

// Importing necessary modules and components for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyComponent } from './survey.component';

// Describing the tests to be run on the SurveyComponent
describe('FormComponent', () => {

  // Initializing the component and fixture variables
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  // Asynchronous function to configure the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyComponent ] // declaring the SurveyComponent to be tested
    })
    .compileComponents(); // compiling the component
  });

  // Synchronous function to create the component and detect changes
  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent); // creating the SurveyComponent fixture
    component = fixture.componentInstance; // assigning the SurveyComponent instance to the component variable
    fixture.detectChanges(); // detecting changes to the component
  });

  // Testing whether the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // expecting the component to be truthy
  });
});
