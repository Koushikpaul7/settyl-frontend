import React from 'react';
import { useForm } from 'react-hook-form';
const AddEmployee = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        console.log(data);

        const url=`https://serene-atoll-84019.herokuapp.com/employee`;
        fetch(url,{
            method:'POST',
            headers: {
               'content-type':'application/json',
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            event.target.reset()
        })

    }

    return (
        <div className=''>
            <p className='text-2xl text-center my-6'>Add employee</p>
            <form className='flex flex-col mx-auto w-full px-20' onSubmit={handleSubmit(onSubmit)}>

      <input placeholder='Name' className='mb-2 input input-bordered input-primary w-full  ' {...register("name", { required: true, maxLength: 20 })} />
      <input type='number' placeholder='salary' className='mb-2 input input-bordered input-primary w-full ' {...register("salary", { required: true, maxLength: 200 })} />
      <input type='number' placeholder='age' className='mb-2 input input-bordered input-primary w-full ' {...register("age", { required: true, maxLength: 2 })} />
     
      <input className='btn btn-success rounded shadow w-48 mx-auto' type="submit" value='Add ' />
    </form>
        </div>
    );
};

export default AddEmployee;