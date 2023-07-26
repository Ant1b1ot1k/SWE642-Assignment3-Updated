//This file contains the unit tests for the survey-data model. Created by default when creating a new model class

// Import the SurveyData class from the './survey-data' module
import { SurveyData } from './survey-data';

// Use the 'describe' function to group related tests together
describe('SurveyData', () => {
  // Use the 'it' function to define a test case
  it('should create an instance', () => {
    // Create a new instance of the SurveyData class and check whether it is truthy (i.e., not null or undefined)
    expect(new SurveyData()).toBeTruthy();
  });
});
