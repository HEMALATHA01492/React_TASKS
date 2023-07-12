import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

function Read() {
 const[data,setData]=useState([])
  const {id}=useParams();
  useEffect(()=>{
    axios.get('http://localhost:3005/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  })

  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
              <div className="">
                     <div className="justify-content-center align-items-center"><h5>User id:{data.id}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Name:{data.name}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Age:{data.age}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Location:{data.location}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Contact:{data.contact}</h5></div>

                  
                </div>
                <Link to={`/edit/${id}`} className="btn btn-success  justify-items-end m-2 mt-4">Edit</Link>
                <Link to='/' className="btn btn-danger  justify-items-end m-2 mt-4">Close</Link>
        </div>
    </div>
    </div>
  )
}

export default Read;