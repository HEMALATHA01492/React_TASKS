import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

function App() {
  return (
    <div>
      <h2 className="text-center p-3">Task 1 - Price cart bootstrap</h2>
    <section className="pricing py-5">
      <div className="container">
       <div className="row">
          <Card1 />
          <Card2 />
          <Card3 />
       </div>
     </div>
    </section>
  </div>
  )
}

export default App;