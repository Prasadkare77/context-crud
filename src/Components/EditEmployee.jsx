import React,{useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { EmployeeContext } from './EmployeeStore';

import { updateEmployee } from './employeeSlice';

const EditEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const {employees, updateEmployee} = useContext(EmployeeContext)
  const employees = useSelector(state=>state.employee.employees)

  const {id} =useParams()
  console.log(id)

  const[empId,setEmpId ] =useState('')
  const[name,setName] = useState('')
  const[position,setPosition] = useState('')
  const[company,setCompany]= useState()

  useEffect(()=>{
    const employee = employees.find((employee)=>employee.id === parseInt(id))
   if(employee){
    setEmpId(employee.empID)
    setName(employee.name)
    setPosition(employee.position)
    setCompany(employee.company)
   }
 },[id,employees])

 const handleUpdate =(e)=>{
    e.preventDefault();
    const updatedEmployee ={id:parseInt(id),empId,name,position,company}
    //updateEmployee(parseInt(id),updatedEmployee)
    dispatch(updateEmployee({id:parseInt(id),updateEmployee}))

    navigate('/')
 }
  return (
    <div>
      <div>
        <Form onSubmit={handleUpdate}>
          <p>EDIT EMPLOYEE</p>
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
          <div className="btn">
            
            <Button variant="outline-primary" type="submit" >Update</Button>
            <Button variant="outline-secondary" onClick={()=>navigate('/')} className="btnLftMarg">Cancel</Button>{' '}
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EditEmployee
