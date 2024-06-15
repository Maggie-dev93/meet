Feature: Show and Hide Event Details

Scenario: An event element is collapsed by default
  Given an event element on the event list
  When the page loads
  Then the event element is collapsed by default

Scenario: User can expand an event to see details
  Given an event element on the event list
  When the user clicks on the event element
  Then the event element expands to show the event details

Scenario: User can collapse an event to hide details
  Given an expanded event element on the event list
  When the user clicks on the expanded event element
  Then the event element collapses to hide the event details
