// src/__tests__/App.test.js

import React from 'react';  // Import React
import { render, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';


describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('render NumberOfEvents', () => {
    expect(AppDOM.querySelector('#numberOfEvents')).toBeInTheDocument();
   });
});

describe('<App />, integration', () => {
  test('renders a list of events matching the city which user selected', async () => {
      const user = userEvent.setup();
      const appComponent = render(<App />);
      const appDom = appComponent.container.firstChild;
      const citySearchComponent = appDom.querySelector('#city-search');
      const textbox = within(citySearchComponent).queryByRole('textbox');

      await user.type(textbox, 'Berlin');
      const berlinSuggestionItem = within(citySearchComponent).queryByText('Berlin, Germany');

      await user.click(berlinSuggestionItem);
      const allEvents = await getEvents();
      const filteredEvents = allEvents.filter((event) => {
          return event.location === 'Berlin, Germany';
      });

      const eventListDom = appDom.querySelector('#event-list');
      const renderedEvents = within(eventListDom).queryAllByRole('listitem');
      
  });
});