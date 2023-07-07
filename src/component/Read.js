import React from 'react';
import { useParams,Link } from 'react-router-dom';

function Read(props) {
    const {data}=props;
    const id=useParams().id;
    const data1=data.find(e=>e.id===Number(id));


  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
              <div className="">
                     <div className="justify-content-center align-items-center"><h5>Id Number:{data1.id}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Name:{data1.name}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Age:{data1.age}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Location:{data1.location}</h5></div>
                     <div className="justify-content-center align-items-center"><h5>Contact:{data1.contact}</h5></div>

                  
                </div>
             
               <Link to='/' className="btn btn-danger  justify-items-end">Close</Link>
        </div>
    </div>
    </div>
  )
}

export default Read;