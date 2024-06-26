import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState('32'); 

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);

        if (isNaN(value) || value > 100 || value <= 0) {
            const errorText = "Please enter a number between 1 and 100"; // Define errorText here
            setErrorAlert(errorText);
        } else {
            setErrorAlert("");
            setCurrentNOE(value);
        }
    };

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="text"
                id="number-of-events-input"
                className="number-of-events-input"
                value={number}
                onChange={handleInputChanged}
            />
        </div>
    );
};

export default NumberOfEvents;
