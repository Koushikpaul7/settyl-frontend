import React, { useEffect, useState } from 'react';
import {  Link} from "react-router-dom";
import Toggle from './Toogle';
const Emplyees = () => {
    const [list, setList]=useState([])
    useEffect(()=>{
        fetch('https://serene-atoll-84019.herokuapp.com/employee',{
            method:"GET",
        })
        .then(res=>res.json())
        .then(data=>{
          setList(data)})
    },[])


    

    const handleDelete = (id) => {
        const url = `https://serene-atoll-84019.herokuapp.com/employee/${id}`;
        console.log(url);
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = list.filter((remainingList) => remainingList._id !== id);
            setList(remaining)
           
          });
      };


    return (
       
        <Toggle>
            <div> 
            <h1 className='text-3xl text-center'>Employees list </h1>

            <div className="lg:overflow-x-hidden w-full px-20 mt-10">
  <table className="table w-full text-center">
    <thead>
      <tr>

        <th>Name</th>
        <th>Salary</th>
        <th>Age</th>
        <th>Handel</th>
      </tr>
    </thead>
    <tbody  className='text-center'>
            {
                list.map((employee,index)=>
                <tr>
                <td className='ms-5'>{employee.name}</td>
                <td>{employee.salary}</td>
                <td>{employee.age}</td>
                <td> <Link to={`/employee/${employee?._id}`}><button className='btn btn-info'>Edit</button></Link>  <button className='btn bg-red-600' onClick={() => handleDelete(employee._id)}>delete</button> </td>
              </tr>
            )}
     
      
    </tbody>
  </table>
</div>


        </div>
        </Toggle>
    );
};

export default Emplyees;