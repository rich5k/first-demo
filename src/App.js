import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person";
function App() {
  return (
    <div className="App">
     <Person name="Max" age= "28" /> 
     <Person name="Manu" age= "29" /> 
    </div>
  );
}

export default App;
