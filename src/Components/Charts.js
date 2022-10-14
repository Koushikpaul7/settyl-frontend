import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,BarChart,Bar,Legend,ResponsiveContainer } from 'recharts';
const Charts = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/employee')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='mx-auto my-10'>
            <LineChart
  width={300}
  height={200}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>

  <XAxis dataKey="name" />
  <YAxis dataKey="age"/>
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="salary" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="age" stroke="#ff7300" yAxisId={0} />
  
</LineChart>


<BarChart className='mt-20' width={330} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name"  />
  <YAxis dataKey="salary"/>
  <Tooltip />
  <Legend />
  <Bar dataKey="salary" fill="#8884d8" />
  <Bar dataKey="age" fill="#82ca9d" />
</BarChart>
        </div>
    );
};

export default Charts;