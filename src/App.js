
import './App.css';
import Emplyees from './Components/Emplyees';
import AddEmployee from './Components/AddEmployee';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from "react-router-dom";
import EditEmployee from './Components/EditEmployee';
import Chart from './Components/Charts';
import Charts from './Components/Charts';

function App() {
  return (
    <div className="">
     <Routes>
     <Route
            path="/"
            element={
             
              <Dashboard></Dashboard>
            
            }
          >
     <Route index element={<Emplyees/>}></Route>
     <Route path="/" element={<Emplyees/>}></Route>
     <Route path="employeeAdd" element={<AddEmployee/>}></Route>
     <Route path="chart" element={<Charts/>}></Route>
     <Route path="employee/:id" element={<EditEmployee/>}></Route>
    </Route>
     </Routes>
  
    </div>
  );
}

export default App;
