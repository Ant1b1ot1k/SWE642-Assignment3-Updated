// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This code defines the routes for the application using Angular's RouterModule and Routes modules, and exports the AppRoutingModule module. 
// The routes are defined for the HomeComponent, SurveyComponent, and ListComponent.

// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components that will be used in the routing
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { ListComponent } from './components/survey-list/survey-list.component';

// Define the routes for the application
const routes: Routes = [
  {path:'', component:HomeComponent}, // Route for the home page
  {path:'home', component:HomeComponent}, // Route for the home page
  {path:'survey', component:SurveyComponent}, // Route for the survey page
  {path:'survey-list', component:ListComponent} // Route for the survey list page
];

// Define the module for the AppRoutingModule
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import the routes and use the forRoot() method
  exports: [RouterModule] // Export the RouterModule
})
export class AppRoutingModule { }
