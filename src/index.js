import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const data=[
   {
        id:1,
        name:'Sree Lakshan',
        age:28,
        location:'Chennai',
        contact:'9875863780'
    }, 
    {
        id:2,
        name:'Nivin',
        age:22,
        location:'Chennai',
        contact:'9879863780'
    }, 
    {
        id:3,
        name:'Malathi',
        age:20,
        location:'Madurai',
        contact:'9875887680'
    }, 
    {
        id:4,
        name:'Hema',
        age:20,
        location:'Chennai',
        contact:'7865863780'
    }, 
]

ReactDOM.createRoot(document.getElementById('root')).render(
<App data={data} />
);

