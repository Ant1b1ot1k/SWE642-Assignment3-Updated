// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513


// This file defines a Java class named SurveyService, which is a service component that interacts with the SurveyRepository to retrieve and add survey data to the database.
// It contains methods to retrieve all surveys and add a new survey, and it uses the @Service annotation to indicate that the class is a service component.

// This line indicates that the class is part of the package named com.surveymanagementsystem.service
package com.surveymanagementsystem.service;

// Import required classes
import com.surveymanagementsystem.models.Survey;
import com.surveymanagementsystem.repository.SurveyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // This annotation indicates that this class is a service component
public class SurveyService {
    private final SurveyRepository surveyRepository; // Final field for storing the instance of the SurveyRepository

    public SurveyService(SurveyRepository surveyRepository) { // Constructor for initializing the SurveyRepository instance
        this.surveyRepository = surveyRepository;
    }

    public List<Survey> getSurveys() { // Method to retrieve all surveys from the database using the repository
        return surveyRepository.findAll();
    }

    public Survey addSurvey(Survey survey) { // Method to add a survey to the database using the repository
        return surveyRepository.save(survey);
    }
}
