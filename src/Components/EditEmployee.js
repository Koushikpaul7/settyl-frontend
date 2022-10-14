import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
const EditEmployee = () => {
    const  {id}=useParams();
    const [list,setList]=useState({})
    const [name, setname] = useState('');
    const [salary, setsalary] = useState('');
    const [age, setage] = useState('');
    useEffect(()=>{
        fetch(`https://serene-atoll-84019.herokuapp.com/employee/${id}`,{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>setList(data))
    },[])
    const handelEdit=(e)=>{
        e.preventDefault()
        
       
        const list={name,salary,age}
      fetch(`https://serene-atoll-84019.herokuapp.com/employee/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(list)
    
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)
        if(data.modifiedCount===1){
            e.target.reset()
            alert("Updated employee")
        }
       
        })
}
    return (
        <div className='container mx-auto w-96'>
            <h6>Edit Employee </h6>
        
        <form className='w-50 mx-auto' onSubmit={handelEdit}>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Name</label>
    <input className='form-control'
          type="text"
          id="first"
          name="name"
          value={name}
          onChange={event => setname(event.target.value)}
          autoComplete="off"
        />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Salary</label>
    <input className='form-control'
          type="number"
          id="first"
          name="salary"
          value={salary}
          onChange={event => setsalary(event.target.value)}
          autoComplete="off"
        />
  </div>
  <div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label">Age</label> <br />
    <input className='from-control' id="first" cols="30" name="age"
          value={age}
          onChange={event => setage(event.target.value)} rows="5"></input>
   
  </div>
            <button className='btn btn-info'>Update Employee</button>
          </form>
       
      </div>
    );
};

export default EditEmployee;