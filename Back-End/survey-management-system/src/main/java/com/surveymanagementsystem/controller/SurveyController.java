// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513

// This file defines a RESTful web service endpoint for a survey management system with two HTTP requests: a GET request to /survey/getAllSurveys to return a list of
// all surveys and a POST request to /survey/addSurvey to add new survey data to the database. It also enables Cross-Origin Resource Sharing for an Angular app.

// This line indicates that the class is part of the package named com.surveymanagementsystem.controller
package com.surveymanagementsystem.controller;
// Import required classes
import com.surveymanagementsystem.models.Survey;
import com.surveymanagementsystem.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.ws.rs.Path;

import java.util.List;

// Enable Cross-Origin Resource Sharing for Angular app on http://localhost:4200
@CrossOrigin(origins = "http://localhost:4200/")
// Define REST endpoint and controller class
@RestController
@RequestMapping(path = "/survey")
//@Path("/survey")
public class SurveyController {
    // Inject service class
    @Autowired
    private SurveyService service;

    // Map HTTP GET request to "/survey/getAllSurveys" URL path
    // and return list of all surveys
    @GetMapping(path = "/getAllSurveys")
    public List<Survey> getSurveys(){
        return service.getSurveys();
    }

    // Map HTTP POST request to "/survey/addSurvey" URL path
    // and add new survey data to the database
    @PostMapping(path = "/addSurvey")
    public Survey addSurvey(@RequestBody Survey survey){
        return service.addSurvey(survey);
    }
}
