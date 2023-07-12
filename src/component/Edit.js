import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';

function Edit() {
//fetching data
  const {id}=useParams();
  useEffect(()=>{
    axios.get('http://localhost:3005/users/'+id)
    .then(res => setValue(res.data))
    .catch(err => console.log(err));
  })

  //for update data
  const [value,setValue]=useState({
    name:'',
    age:'',
    location:'',
    contact:''
})
const Navigate=useNavigate();

const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3005/users/'+id,value)
    .then(response =>{
      console.log(response);
      Navigate('/')
    })
   .catch(err => console.log(err));}
 


  return (
    <div>
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h3>Edit User</h3>
          <form onSubmit={handleUpdate}>
              <div className="mb-3 row">
                     <label for="input" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your name here'
                      value={value.name} 
                      onChange={e=>setValue({...value,name:e.target.value})} 
                     />
                  </div>
                </div>
              <div class="mb-3 row">
                     <label for="input" className="col-sm-2 col-form-label">Age</label>
                  <div class="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your age here'
                     value={value.age} 
                      onChange={e=>setValue({...value,age:e.target.value})}
                      />
                   </div>
               </div>
               <div class="mb-3 row">
                     <label for="input" className="col-sm-2 col-form-label">Location</label>
                  <div class="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your location here' 
                      value={value.location} 
                      onChange={e=>setValue({...value,location:e.target.value})}
                      />
                   </div>
               </div>
               <div class="mb-3 row">
                     <label for="input" className="col-sm-2 col-form-label">Contact</label>
                  <div class="col-sm-10">
                     <input type="text" className="form-control" placeholder='Enter your contact number here' 
                       value={value.contact} 
                       onChange={e=>setValue({...value,contact:e.target.value})}
                     />
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