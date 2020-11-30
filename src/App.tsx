import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import ParentConnected from './components/ParentRedux';

function App() {
  return (
    <div className="App">
        <ParentConnected />
    </div>
  );
}

export default App;
