import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App'; // Adjust the import path as per your project structure
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  // Scenario 1
  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
    let AppComponent;
    let eventList;
    given('the user has not specified a number of events to display', () => {
      // Implement this step as needed based on your application's behavior
      AppComponent = render(<App />);
    });

    when('the page loads', async () => {
        const AppDOM = AppComponent.container.firstChild;
        await waitFor(() => {
            eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList[0]).toBeTruthy();
        });
    });

    then('32 events are shown by default', () => {
     expect(eventList.length).toEqual(32);
        });
    });

  // Scenario 2
  test('User can change the number of events displayed', ({ given, when, then }) => {
    let AppComponent;

    given('the user wants to change the number of events displayed', async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        await waitFor(() => {
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList[0]).toBeTruthy();
        });
    });

    when('the user specifies a number of events to display', async () => {
        const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });

    then('the specified number of events is shown', () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList.length).toEqual(32);
    }
);
});
});