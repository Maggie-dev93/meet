import React, { useState, useEffect } from 'react';  // Import React, useState, and useEffect
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { extractLocations, getEvents } from './api';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;

