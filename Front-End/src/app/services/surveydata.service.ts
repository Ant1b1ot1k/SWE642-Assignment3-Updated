// This code defines an Angular service named SurveydataService that uses HttpClient to send HTTP GET and POST requests to a server to retrieve and store survey data, respectively. 
// The getFormData() method returns an observable of SurveyData array by making a GET request to the specified URL, while the saveFormData() method accepts a SurveyData object 
// as an argument and returns an observable of the same type by sending a POST request to another specified URL.

import { Injectable } from '@angular/core'; // Import Injectable decorator from Angular core
import { HttpClient } from '@angular/common/http'; // Import HttpClient from Angular common HTTP library
import { Observable } from 'rxjs'; // Import Observable from the RxJS library
import { map } from 'rxjs/operators'; // Import map operator from the RxJS library
import { SurveyData } from '../models/survey-data'; // Import SurveyData model from ../models/survey-data

@Injectable({
  providedIn: 'root'
})
export class SurveydataService {

  private getUrl: string = "http://localhost:8080/survey/getAllSurveys"; // Declare a private string variable named getUrl, initialized with a URL string
  private postUrl: string = "http://localhost:8080/survey/addSurvey"; // Declare a private string variable named postUrl, initialized with a URL string

  constructor(private _http: HttpClient) { } // Declare a constructor with a private _http property of type HttpClient

  getFormData(): Observable<SurveyData[]> { // Declare a public method named getFormData that returns an observable of SurveyData array
    return this._http.get<SurveyData[]>(this.getUrl).pipe( // Use HttpClient's get method with getUrl to fetch data and return an observable that pipes the response through a map operator
      map(response => response)
    )
  }

  saveFormData(data: SurveyData): Observable<SurveyData> { // Declare a public method named saveFormData that accepts SurveyData as an argument and returns an observable of SurveyData
    return this._http.post<SurveyData>(this.postUrl, data); // Use HttpClient's post method with postUrl and SurveyData as arguments and return the response as an observable
  }
}
