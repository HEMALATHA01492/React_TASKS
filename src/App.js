import {Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home1 from './pages/Home1';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './component/NavBar';

function App(){
  return(
    <>
    <NavBar />
    <Container>
      <Routes>
        <Route path ='/' element={<Home1/>}/>
        <Route path ='/store' element={<Store />}/>
        <Route path ='/about' element={<About />}/>

      </Routes>
    </Container>
    </>
  )
}
export default App;