import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
function App() {
  // const [hover,setHover]=useState('null')
  const style={
    color:'blue'
  }
  
  return (
    <div>
      <span>
      <i class="fa-solid fa-star checked" ></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      <i class="fa-solid fa-star checked"></i>
      </span>
     
    </div>
  )
}

export default App



// import {Routes, Route} from 'react-router-dom';
// import Home1 from './pages/Home1';
// import Store from './pages/Store';
// import About from './pages/About';
// import NavBar from './component/NavBar';

// function App(){
//   return(
//     <>
//     <NavBar />
//       <Routes>
//         <Route path ='/' element={<Home1/>}/>
//         <Route path ='/store' element={<Store />}/>
//         <Route path ='/about' element={<About />}/>

//       </Routes>
//     </>
//   )
// }
// export default App;