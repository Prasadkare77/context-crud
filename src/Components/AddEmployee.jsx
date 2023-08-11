import React, { useContext, useState } from 'react'

import './crudStyle.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';

//import useDispath for calling the actions in the reduce
import { useDispatch } from 'react-redux';

// import reducer action from employee slice action
import { addEmployee } from './employeeSlice';


const AddEmployee = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  // console.log(EmployeeContext);
  const[empId,setEmpId] = useState('')
  const[name,setName] = useState('')
  const[position,setPosition] = useState('')
  const[company,setCompany] = useState('')

  // const {addEmployee} = useContext(EmployeeContext) 

  const handleSubmit = (e) => {
    e.preventDefault()
    // alert(`EmpId:${empId}, Name:${name}, Position:${position}, Company:${company} Employee Has Been Added Succesfully`)
    
    // Logic to add employee data into store
    const employee = {id:Date.now(), empId, name, position, company}
    // addEmployee(employee)
    // console.log(employee);

    // Call the addEmployee action of employee slice
    dispatch(addEmployee(employee))
    navigate('/')
  }
  return (
    <div>
      <h5>Add Employee</h5><br/>
      <Form onSubmit={handleSubmit}>
        <Container>
            <Row>
                <Col><label>ID</label></Col>
                <Col><input type='text' value={empId} onChange={(e)=>setEmpId(e.target.value)}></input></Col>
                <Col><label>Name</label></Col>
                <Col><input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input></Col>
                <Col><label>Position</label></Col>
                <Col><input type='text' value={position} onChange={(e)=>setPosition(e.target.value)}></input></Col>
                <Col><label>Company</label></Col>
                <Col><input type='text' value={company} onChange={(e)=>setCompany(e.target.value)}></input></Col>
            </Row><br/>
            <br/>
            <div className='btn'>
                <Button variant="outline-primary" type="submit" >Add</Button>
                <Button variant="outline-warning" type="reset" onClick={()=>navigate('/')}>Cancel</Button>
            </div>
        </Container>
      </Form>

      
    </div>
  )
}

export default AddEmployee
