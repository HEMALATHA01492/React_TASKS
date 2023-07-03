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