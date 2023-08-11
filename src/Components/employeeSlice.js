import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees:[]
}
const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers:{
        addEmployee:(state,action)=>{
            console.log(action)
            state.employees.push(action.payload)
        },
        updateEmployee:(state,action)=>{
            console.log(action.payload);
            const {id,updateEmployee} = action.payload;
            const index = state.employees.findIndex(emp=>emp.Id === id)
            if(index!==1){
                state.employees[index] = {...state.employees[index], ...updateEmployee}
            }
        },
        deleteEmployee:(state,action)=>{
            console.log(action.payload);
            state.employees = state.employees.filter(employee=>employee.id!==action.payload)
        }
    }
})

export const {addEmployee,updateEmployee,deleteEmployee} = employeeSlice.actions;

export default employeeSlice.reducer