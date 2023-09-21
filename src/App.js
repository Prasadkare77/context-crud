import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EmployeeList from './Components/EmployeeList' 
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import { EmployeeProvider } from './Components/EmployeeStore';

function App() {
  return (
    <div className="App">
      <div>
        <h4>Employee Management System Using Store(useContext)</h4>
      </div>
      {/* <EmployeeList/> */}

      <Router>
        <EmployeeProvider>
          <Routes>
            <Route exact path='/' element={<EmployeeList/>}></Route>
            <Route exact path='/addEmployee' element={<AddEmployee/>}></Route>
            <Route exact path='/editEmployee/:id' element={<EditEmployee/>}></Route>
          </Routes>
        </EmployeeProvider>

      </Router>
    </div>
  );
}

export default App;
