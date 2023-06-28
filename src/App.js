// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Home from './component/Home';
import CardData from './component/CardData';



function App() {
  const [count,setCounter]=useState(0);
  return (
    <div>
      <Home count={count}/>
    </div>
  )
} 

export default App;
