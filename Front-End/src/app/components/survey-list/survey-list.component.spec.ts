// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This file contains the unit tests for the survey-list component. Created by default when creating a new component

// Importing necessary dependencies for unit testing the component
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importing the component to be tested
import { ListComponent } from './survey-list.component';

// Test suite for the ListComponent
describe('ListComponent', () => {

  // Declaring variables for component and component fixture instances
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  // Asynchronous function to configure the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  // Synchronous function to create the component fixture instance and component instance
  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
