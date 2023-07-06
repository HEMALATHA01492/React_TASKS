import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import './App1.css';
import Home from './component/Home';

function App(props) {
  const {data}=props
  console.log(data)
  return (
    <div>
   <Home data={data} />
     
    </div>
  )
}

export default App;
