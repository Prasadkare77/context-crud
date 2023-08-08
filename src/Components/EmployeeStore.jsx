import React, { createContext, useState } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) => {
    const [employees,setEmployees] = useState([])

    // Stroe Employee data into store (employees array)
    const addEmployee = (employee) => {
        console.log(employee);
        setEmployees([...employees,employee])
    } 

    return(
        <div>
            <EmployeeContext.Provider value={{employees,addEmployee}}>
                {children}
            </EmployeeContext.Provider>
        </div>
    )
}