import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo2 from './Component/Demo';
import Demo1 from './Component/Demo1';
import Parent from './Component/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<Demo2></Demo2>
		<Demo1></Demo1>
		<Parent></Parent>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
