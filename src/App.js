import React from 'react';
import HistoricalPrice from './Graficos/Historical_Price/HistoricalPrice'
import Return from './Graficos/Return/Return';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhisco</h1>
        <HistoricalPrice/>
        <Return/>
      </header>
    </div>
  );
}

export default App;
