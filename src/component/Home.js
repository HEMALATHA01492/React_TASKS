import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Data from '../component/Data';


function Home() {
    const Navigate=useNavigate();

    const handleEdit=(id,name,age,location,contact)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Location',location);
        localStorage.setItem('Contact',contact);
        localStorage.setItem('id',id);

    }
    const handleDelete=(id)=>{
        const confirm=window.confirm("Would you like to Delete?");
        if(confirm){
            let index=Data.map((e)=>{
                return e.id
            }).indexOf(id);
            Data.splice(index,1)
            Navigate('/')
        }else{
            Navigate('/')
        }
    }
  return (
    <div className='d-flex flex-column justify-content-center align-iten-center bg-light'>
        <h3>List of Users</h3>
        <div className='rounded bh-white boder shadow p-4'>
        <div className='d-flex justify-content-start'>
            <Link to='/create' className="btn btn-success m-2 p-2">Create User </Link>
        </div>
        <table className="table table-striped">
       <thead>
       <tr>
        <th scope="col">ID</th>
        <th scope="col">User Name</th>
        <th scope="col">Age</th>
        <th scope="col">Location</th>
        <th scope="col">Contact</th>
        <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
     {
        Data && Data.length > 0 ?
        Data.map(data=>(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.Name}</td>
                <td>{data.Age}</td>
                <td>{data.Location}</td>
                <td>{data.Contact}</td>
                <td>
                    <Link to={`/read/${data.id}`} element={handleEdit}>
                        <button className="btn btn-success m-2" onClick={()=>handleEdit(data.id,data.Nameame,data.Age,data.Location,data.Contact)}>Read</button>
                    </Link>
                    <Link to={`/edit/${data.id}`} element={handleEdit}b>
                        <button className="btn btn-primary m-2" onClick={()=>handleEdit(data.id,data.Name,data.Age,data.Location,data.Contact)}>Edit</button>
                    </Link>
                    <button type="button" onClick={ e=>handleDelete(data.id)} className="btn btn-danger m-2">Delete</button>
                </td>
            </tr>
        ) )
        : "NO DATA AVAILABLE"
        }
        </tbody>
     </table>
    </div>
    </div>
  )
}

export default Home;