Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 events are shown by default
  Given the user has not specified a number of events to display
  When the page loads
  Then 32 events are shown by default

Scenario: User can change the number of events displayed
  Given the user wants to change the number of events displayed
  When the user specifies a number of events to display
  Then the specified number of events is shown
