// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513

// This file contains a Java interface named SurveyRepository which extends the JpaRepository interface, and it provides standard CRUD methods for working with Survey entities.
// This file is used to define the behavior of a repository component that interacts with a database to retrieve and manipulate survey data.

// This line indicates that the class is part of the package named com.surveymanagementsystem.repository
package com.surveymanagementsystem.repository;

// Import required classes
import com.surveymanagementsystem.models.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Indicates that this class is a repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    // This interface extends JpaRepository which provides standard CRUD methods for working with Survey entities
    // The first parameter of JpaRepository is the entity type (Survey) and the second parameter is the type of the entity's primary key (Long)
    // By extending JpaRepository, SurveyRepository gains the ability to perform common database operations (e.g., save, delete, find)
}
