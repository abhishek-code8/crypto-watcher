import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NameAndPrice from './components/NameAndPrice';




function App() {
  return (

    <div className="App">
      <NameAndPrice label={"BTC"} value={45} />
    </div>
  );
}

export default App;
