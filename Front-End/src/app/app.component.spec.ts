//This file contains the unit tests for the app component. Created by default

import { TestBed } from '@angular/core/testing'; // import the TestBed module for unit testing
import { RouterTestingModule } from '@angular/router/testing'; // import the RouterTestingModule for routing related testing
import { AppComponent } from './app.component'; // import the AppComponent that is being tested

describe('AppComponent', () => { // describe the test suite for the AppComponent
  beforeEach(async () => { // run this before each test asynchronously
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // import the RouterTestingModule in the testing module
      ],
      declarations: [
        AppComponent // declare the component to be tested
      ],
    }).compileComponents(); // compile the component for testing
  });

  it('should create the app', () => { // write a test to check if the app is created successfully
    const fixture = TestBed.createComponent(AppComponent); // create a component fixture
    const app = fixture.componentInstance; // get the app component instance
    expect(app).toBeTruthy(); // expect the app to be truthy, i.e., not null or undefined
  });

  it(`should have as title '642angular'`, () => { // write a test to check if the title is set correctly
    const fixture = TestBed.createComponent(AppComponent); // create a component fixture
    const app = fixture.componentInstance; // get the app component instance
    expect(app.title).toEqual('642angular'); // expect the title to be '642angular'
  });

  it('should render title', () => { // write a test to check if the title is rendered correctly in the template
    const fixture = TestBed.createComponent(AppComponent); // create a component fixture
    fixture.detectChanges(); // detect changes in the component
    const compiled = fixture.nativeElement as HTMLElement; // get the compiled HTML of the component
    expect(compiled.querySelector('.content span')?.textContent).toContain('642angular app is running!'); // expect the content to contain the correct message
  });
});
