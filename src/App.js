import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/Home';



function App(props) {
  const {data}=props;
  return (
    <div>
      <Home data={data} key={data.id}/>
      
    </div>
  )
} 

export default App;
