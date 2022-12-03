
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import React,{useContext,createContext,useState} from 'react'


export const store = createContext();


function App() {

  const [customersList,setCustomersList]=useState([])
  const [employeesList,setEmployeesList]=useState([])
  const [ordersList,setOrdersList]=useState([])



  return (
    <div className="App">
      <store.Provider value={{customersList,setCustomersList,employeesList,setEmployeesList,ordersList,setOrdersList}}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<MainDashboard/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      
      </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
