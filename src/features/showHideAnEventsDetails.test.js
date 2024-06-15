import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  //SCENARIO 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;
  
    given('an event element on the event list', () => {
      AppComponent = render(<App />);
    });
  
    when('the page loads', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
  
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32); // Adjust as per your actual expected number of items
      });
    });
  
    then('the event element is collapsed by default', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
  

  test('User can expand an event to see details', ({ given, when, then }) => {
    let AppComponent;
  
    given('an event element on the event list', async () => {
      AppComponent = render(<App />);
      await waitFor(() => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });
  
    when('the user clicks on the event element', async () => {
      const button = AppComponent.queryAllByText('Show Details')[0];
      await userEvent.click(button);
    });
  
    then('the event element expands to show the event details', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });
  });
  

  test('User can collapse an event to hide details', ({ given, when, then }) => {
    let AppComponent;
    let button;
  
    given('an expanded event element on the event list', async () => {
      AppComponent = render(<App />);
      await waitFor(() => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
  
      button = AppComponent.queryAllByText('Show Details')[0];
      await userEvent.click(button);
  
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });
  
    when('the user clicks on the expanded event element', async () => {
      await userEvent.click(button);
    });
  
    then('the event element collapses to hide the event details', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
});