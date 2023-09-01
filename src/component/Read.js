import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from '../component/Data';
function Read() {
  
  const id= useParams().id;
  const out=Data.find(n => n.id === Number(id))
 
  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
              <div>
                <h2  className="text-center p-2">User Details</h2>
                     <div className="justify-content-center align-items-center"><h5>User id:{out.id}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Name:{out.Name}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Age:{out.Age}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Location:{out.Location}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Contact:{out.Contact}</h5></div>

                
                </div>
                <Link to='/' className="btn btn-danger  justify-items-end m-2 mt-4">Close</Link>
        </div>
    </div>
    </div>
  )
}

export default Read;