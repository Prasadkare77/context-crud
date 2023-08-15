import React, { createContext, useState } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) => {
    const [employees,setEmployees] = useState([])

    // Stroe Employee data into store (employees array)
    const addEmployee = (employee) => {
        console.log(employee);
        setEmployees([...employees,employee])
    } 

    const updateEmployee = (id,updateEmployee)=>{
        setEmployees(
            employees.map((employee)=>employee.id === id ? updateEmployee : employee)
        )
    }

    const deleteEmployee = (id) => {
        console.log(id);
        setEmployees(
            employees.filter((employee)=>employee.id!==id)
        )
    }

    return(
        <div>
            <EmployeeContext.Provider value={{employees,addEmployee,updateEmployee,deleteEmployee}}>
                {children}
            </EmployeeContext.Provider>
        </div>
    )
}