import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Create from './component/Create';
import Edit from './component/Edit';
import Read from './component/Read';
function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/read/:id' element={<Read />}></Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App;
