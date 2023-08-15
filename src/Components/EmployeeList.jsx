import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './crudStyle.css'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// To read the data from store we nedd useSelector
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';

// import { EmployeeContext } from './EmployeeStore'
import { deleteEmployee } from './employeeSlice';
// import { EmployeeContext } from './EmployeeStore';

const EmployeeList = () => {
  // const {employees} = useContext(EmployeeContext)
  const dispatch = useDispatch();

  // const {employee,deleteEmployee} = useContext(EmployeeContext)
  const employees = useSelector(state=>state.employee.employees)
  const navigate= useNavigate()

  const handleDelete =(empId)=>{
    dispatch(deleteEmployee(empId))
  }
  return (
    <div>
      <h5>Employee List</h5><br/>
      <div className="addEmployeeBtn outline-primary">
        <Button variant="outline-success" onClick={()=>navigate('/addEmployee')}>Add Employee</Button>
      </div>
      <br/>
      <div class="divEmployeeData ms-5 me-5">
        <Table striped bordered hover>
          <thead>
              <tr>
                  <th>#</th>
                  <th> ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Company</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            {employees.map((employee,index)=>(
              <tr key={employee.id}>
                <td>{index+1}</td>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.company}</td>
                <td>  <Button variant="outline-primary" onClick={()=>navigate(`/editEmployee/${employee.id}`)}>Edit</Button>
                 <Button variant="outline-danger" onClick={()=>handleDelete(employee.id)}>Delete</Button>
                 </td>
              </tr>
            ))}
          </tbody>
      </Table>
      </div>
    </div>
  )
}

export default EmployeeList
