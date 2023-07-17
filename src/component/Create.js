import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [value,setValue]=useState({
        name:'',
        age:'',
        location:'',
        contact:''
    })
    const Navigate=useNavigate();

    const handleSubmit=async(event)=>{
        event.preventDefault();
        await
        axios.post('http://localhost:3005/users',value)
        .then(response =>{
          console.log(response);
          Navigate('/')
        })
       .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h3>Create a User</h3>
          <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your name here'
                     onChange={e=>setValue({...value,name:e.target.value})} />
                  </div>
                </div>
              <div class="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Age</label>
                  <div class="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your age here' 
                      onChange={e=>setValue({...value,age:e.target.value})}/>
                   </div>
               </div>
               <div class="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Location</label>
                  <div class="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your location here' 
                      onChange={e=>setValue({...value,location:e.target.value})}/>
                   </div>
               </div>
               <div class="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Contact</label>
                  <div class="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your contact number here' 
                     onChange={e=>setValue({...value,contact:e.target.value})}/>
                   </div>
               </div>
               <button type="button" className="btn btn-success m-2" onClick={handleSubmit}>Submit</button>
               <Link to='/' className="btn btn-danger m-3">Back</Link>
          </form>
        </div>
    </div>
  )
}

export default Create;