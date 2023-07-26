// The SurveyManagementSystemApplication class is the main class of the application and contains the main method that starts the Spring Boot application
// by running SpringApplication.run() method.

//The SurveyManagementSystemApplication class represents the main class of the application.
package com.surveymanagementsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class SurveyManagementSystemApplication {
	/**
	 * The main method of the application.
	 * @param args an array of command-line arguments for the application.
	 */
	public static void main(String[] args) {
		// Run the application with the specified class and command-line arguments.
		SpringApplication.run(SurveyManagementSystemApplication.class, args);
	}

}
