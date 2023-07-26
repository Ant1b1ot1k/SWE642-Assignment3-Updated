// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// The code defines an Angular module called AppModule. It declares all the components that will be used in the app, imports necessary modules, and defines the root component for 
// this module. This module is then exported so that other parts of the app can import it.

import { NgModule } from '@angular/core'; // Import NgModule from Angular core
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule for use in the app
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to make HTTP requests
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { AppRoutingModule } from './app-routing.module'; // Import app routing module
import { AppComponent } from './app.component'; // Import app component
import { SurveyComponent } from './components/survey/survey.component'; // Import survey component
import { ListComponent } from './components/survey-list/survey-list.component'; // Import survey list component
import { HomeComponent } from './components/home/home.component'; // Import home component

@NgModule({ // Define an Angular module
  declarations: [ // Declare all components in this module
    AppComponent,
    SurveyComponent,
    ListComponent,
    HomeComponent,
  ],
  imports: [ // Import modules that this module needs
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [], // Define services that this module provides
  bootstrap: [AppComponent] // Define the root component for this module
})
export class AppModule { } // Export the AppModule class so that other parts of the app can import it
