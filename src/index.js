import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const data=[
   {
        id:1,
        content:'Earnings (Monthly)',
        price:40000,
    }, 
    {
        id:2,
        content:'Earnings (Annual)',
        price:215000,
    }, 
    {
        id:3,
        content:'Tasks',
        price:50,
    }, 
    {
        id:4,
        content:' Pending Requests',
        price:40000,
    }, 
]

ReactDOM.createRoot(document.getElementById('root')).render(
<App data={data} />
);

