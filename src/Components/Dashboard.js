import React from 'react';
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
   
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
       <Outlet/>
       
  </div> 


  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-sky-200 text-base-content">
     
    <li>
              <Link to="/" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"> Employee</span>
                <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-indigo-50 rounded-full">New</span>
              </Link>
              </li>
    <li>
              <Link to="/employeeAdd" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6">
                <span class="ml-8 text-sm tracking-wide truncate">Add employee</span>
               
              </Link>
              </li>
    <li>
              <Link to="/chart" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-200 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-500 dark:hover:border-gray-800 pr-6">
                <span class="ml-8 text-sm tracking-wide truncate">Chart</span>
               
              </Link>
              </li>
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;