// Prabath Reddy Sagili Venkata - G01393364
// Anjali Maddila - G01381846
// Vishnu Neduncheliyan - G01393742
// Kannan Mrithunjai Venkateswaran - G01351513  

// This code defines a TypeScript class called SurveyData, which represents the structure of a survey response. 
// It contains properties for the various fields in a survey form, such as the respondent's name, contact information, and feedback on their visit.
export class SurveyData {

    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    emailId: string;
    surveyDate: string;
    platform: string;
    recommend: string;
    comments: string;
    checkboxValues: string[];

}
