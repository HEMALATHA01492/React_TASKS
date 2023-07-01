import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const data =[
    { id:1,
     content: "New Arrival",
     price:400,
     important: true
   },
   { id:2,
     content: "Special Item",
     price:500,
     important: false
   },
   
   { id:3,
     content: "Special Item",
     price:300,
     important: true
   },
   { id:4,
     content: "Limitted Item",
     price:400,
     important: true
   },
   { id:5,
     content: "New Arrival",
     price:250,
     important: false
   },
   { id:6,
    content: "Limitted Item",
    price:480,
    important: true
  },
  { id:7,
    content: "Limitted Item",
    price:500,
    important: true
  },
  { id:8,
    content: "Special Item",
    price:300,
    important: true
  },
   ]




ReactDOM.createRoot(document.getElementById('root')).render(<App data={data}/>);

