import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Data from '../component/Data';

function Edit() {


  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [location,setLocation]=useState('');
  const [contact,setContact]=useState('');

  const Navigate=useNavigate();

  const id= useParams().id;
  const out=Data.find(n => n.id === Number(id))

  const handleUpdate=(event)=>{
    event.preventDefault();
    out.Name=name;
    out.Age=age;
    out.Location=location;
    out.Contact=contact;
    Navigate('/')
  } 
  useEffect(()=>{
    setName(out.Name)
    setAge(out.Age);
    setLocation(out.Location);
    setContact(out.Contact);
  },[])

  return (
    <div>
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h3>Edit User</h3>
          <form onSubmit={handleUpdate}>
              <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your name here'
                      value={name} 
                      onChange={(e)=>setName(e.target.value)} />
                  </div>
                </div>
              <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Age</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your age here'
                     value={age} 
                     onChange={(e)=>setAge(e.target.value)}/>
                   </div>
               </div>
               <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Location</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your location here' 
                      value={location} 
                      onChange={(e)=>setLocation(e.target.value)}/>

                   </div>
               </div>
               <div className="mb-3 row">
                     <label htmlFor="input" className="col-sm-2 col-form-label">Contact</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your contact number here' 
                       value={contact} 
                       onChange={(e)=>setContact(e.target.value)}/>

                   </div>
               </div>
               <button type="button" className="btn btn-success m-2" onClick={handleUpdate}>Update</button>
               <Link to='/' className="btn btn-danger m-3">Back</Link>
          </form>
        </div>
    </div>
    </div>
  )
}

export default Edit;