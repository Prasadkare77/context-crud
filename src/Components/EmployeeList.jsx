import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './crudStyle.css'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { EmployeeContext } from './EmployeeStore'

const EmployeeList = () => {
  const {employees} = useContext(EmployeeContext)

  const navigate= useNavigate()
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
              </tr>
            ))}
          </tbody>
      </Table>

      </div>
      
    </div>
  )
}

export default EmployeeList
