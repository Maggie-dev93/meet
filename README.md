# Meet App

## Introduction
Meet App is a comprehensive event management application designed to help users discover, organize, and participate in events effortlessly. Whether you're looking for local gatherings, professional conferences, or social meet-ups, Meet App provides a user-friendly interface to explore and manage events tailored to your interests and location.

## Key Features
- Filter Events by City: Easily find events in your preferred location.
- Show/Hide Event Details: Toggle event details to see more or less information as needed.
- Specify Number of Events: Control how many events are displayed at a time.
- Offline Access: Use the app and access cached event data even without an internet connection.
- Add App Shortcut: Quickly access the Meet App from your home screen.
- Visualize Event Data: View charts that provide insights into upcoming events.


## Serverless Functions

In the Meet app, serverless functions will be employed to handle the backend server logic. These functions, written in Node.js and utilizing the Express framework, will be deployed as AWS Lambda functions using the Serverless Toolkit. When a user interacts with the frontend, hosted on GitHub Pages, requests will be sent to these Lambda functions, which will process the data and interface with the Google Calendar API to fetch or update event information. By leveraging serverless functions, we can achieve a scalable and cost-efficient backend that automatically adjusts to the application's demand without the need for server management. The Serverless Toolkit will facilitate the development, testing, and deployment of these functions, ensuring a streamlined and efficient workflow.

## Project Features and Scenarios

### User Stories

### Feature 1: Filter Events By City
User Story 1:
As a user, I should be able to filter events by city so that I can find events that are relevant to my location.

### Feature 2: Show/Hide Event Details
User Story 1:
As a user, I should be able to show or hide event details so that I can view or hide additional information about events as needed.

### Feature 3: Specify Number of Events
User Story 1:
As a user, I should be able to specify the number of events to display so that I can control how many events I see at once and manage the information overload.

### Feature 4: Use the App When Offline
User Story 1:
As a user, I should be able to use the app when offline so that I can access event information even without an internet connection.

### Feature 5: Add an App Shortcut to the Home Screen
User Story 1:
As a user, I should be able to add an app shortcut to the home screen so that I can quickly access the app without navigating through my device.

### Feature 6: Display Charts Visualizing Event Details
User Story 1:
As a user, I should be able to view charts visualizing event details so that I can easily understand and analyze the event data.

## Gherkin Scenarios

### Feature 1: Filter Events By City

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
- Given the user has not searched for a city
- When the user views the events list
- Then show upcoming events from all cities

### Scenario 2: User should see a list of suggestions when they search for a city
- Given the user is searching for a city
- When the user types in the search box
- Then show a list of suggested cities based on the input

### Scenario 3: User can select a city from the suggested list
- Given the user is searching for a city
- When the user selects a city from the suggested list
- Then show upcoming events for the selected city

### Feature 2: Show/Hide Event Details

### Scenario 1: An event element is collapsed by default
- Given an event element on the event list
- When the page loads
- Then the event element is collapsed by default

### Scenario 2: User can expand an event to see details
- Given an event element on the event list
- When the user clicks on the event element
- Then the event element expands to show the event details

### Scenario 3: User can collapse an event to hide details
- Given an expanded event element on the event list
- When the user clicks on the expanded event element
- Then the event element collapses to hide the event details

### Feature 3: Specify Number of Events

### Scenario 1: When user hasn’t specified a number, 32 events are shown by default
- Given the user has not specified a number of events to display
- When the page loads
- Then 32 events are shown by default

### Scenario 2: User can change the number of events displayed
- Given the user wants to change the number of events displayed
- When the user specifies a number of events to display
- Then the specified number of events is shown

### Feature 4: Use the App When Offline

### Scenario 1: Show cached data when there’s no internet connection
- Given the user has no internet connection
- When the user opens the app
- Then cached data is shown

### Scenario 2: Show error when user changes search settings (city, number of events)
- Given the user has no internet connection
- When the user changes search settings such as the city or number of events
- Then an error message is shown indicating there is no internet connection

### Feature 5: Add an App Shortcut to the Home Screen

### Scenario 1: User can install the meet app as a shortcut on their device home screen
- Given the user wants to add the app as a shortcut
- When the user selects the option to add the app to the home screen
- Then the meet app is added as a shortcut on their device home screen

### Feature 6: Display Charts Visualizing Event Details

### Scenario 1: Show a chart with the number of upcoming events in each city
- Given the user wants to see a visual representation of event details
- When the user views the charts section
- Then a chart is displayed showing the number of upcoming events in each city
