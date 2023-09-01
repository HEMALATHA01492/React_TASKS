import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Data from '../component/Data';


function Create() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [location,setLocation]=useState('');
    const [contact,setContact]=useState('');

       
    const Navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(name==='' || age==='' ||location==='' || contact===''){
           console.log("Enter All the Values")
        }
         else{
            Data.push({id:Data.length+1,Name:name,Age:age,Location:location,Contact:contact})
            Navigate('/')
         }
        
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
                      required
                     onChange={e=>setName(e.target.value)} />
                  </div>
                </div>
              <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Age</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your age here' 
                     required
                      onChange={e=>setAge(e.target.value)}/>
                   </div>
               </div>
               <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Location</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your location here' 
                     required
                     onChange={e=>setLocation(e.target.value)}/>
                   </div>
               </div>
               <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Contact</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your contact number here' 
                      required
                     onChange={e=>setContact(e.target.value)}/>
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