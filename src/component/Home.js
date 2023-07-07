import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    const {data}=props;
    console.log(data)
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
        data.map(data=>(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.location}</td>
                <td>{data.contact}</td>
                <td>
                    <Link to='/read/1' type="button" className="btn btn-primary m-2">Read</Link>
                    <button type="button" className="btn btn-success m-2">Edit</button>
                    <button type="button" className="btn btn-danger m-2">Delete</button>
                </td>
            </tr>
        ) )
        }
        </tbody>
     </table>
    </div>
    </div>
  )
}

export default Home;