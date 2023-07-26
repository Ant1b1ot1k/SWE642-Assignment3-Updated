// This file contains the unit tests for the home component. Created by default when creating a new component

// import the necessary dependencies
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

// describe a test suite for the HomeComponent class
describe('HomeComponent', () => {

  // declare the variables used in the test
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // set up the TestBed configuration before running the tests
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ] // declare the component to be tested
    })
    .compileComponents(); // compile the component
  });

  // create the component and fixture before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // define a test case
  it('should create', () => {
    expect(component).toBeTruthy(); // assert that the component was successfully created
  });
});
