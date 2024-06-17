import { render } from '@testing-library/react';
import { getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents 
            setCurrentNOE= {()=>{}}
            setErrorAlert={() => { }}
            />);
    })
    test('renders number of events text input', () => {
      const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
      expect(numberTextBox).toBeInTheDocument();
      expect(numberTextBox).toHaveClass('number-of-events-input');
  });

  test('default value of the input field is 32', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue('32');
    });
    
  test('updates number of events when user types', async()=>{
      const numberTextbox = NumberOfEventsComponent.queryByRole('textbox');
      await userEvent.type(numberTextbox, "{backspace}{backspace}10");
      expect(numberTextbox.value).toBe("10");
  });


});