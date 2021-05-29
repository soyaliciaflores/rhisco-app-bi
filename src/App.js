import './App.css';
import React from 'react';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
        <HistoricalPrice/>
      </header>
    </div>
  );
}

export default App;
