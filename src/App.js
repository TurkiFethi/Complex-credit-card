import React from 'react';
import './App.css';
import logo from './mc_card.png'
import Card from './component/Card.js'

function App() {
  return (
    <div className="App">
     <Card
     logo={logo}/>
    </div>
  );
}

export default App;
