import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App1.css';

import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import Home from './component/Home';
import Create from './component/Create';
import Edit from './component/Edit';
import Read from './component/Read';
function App(props) {
  const {data}=props
  const padding = {
    padding: 10
  };
  return (
    <BrowserRouter>
    <div>
        <Link to='/' style={padding}></Link>
        <Link to='/create' style={padding}></Link>
        <Link to='/edit/:id' style={padding}></Link>
        <Link to='/read/:id' style={padding}></Link>
      </div>
    <Routes>
    <Route path='/' element={<Home data={data}/>}></Route>
    <Route path='/create' element={<Create />}></Route>
    <Route path='/edit/:id' element={<Edit data={data}/>}></Route>
    <Route path='/read/:id' element={<Read data={data}/>}></Route>


    
     
   
    </Routes>
    </BrowserRouter>

  )
}

export default App;
