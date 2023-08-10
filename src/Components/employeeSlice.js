import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employees:[]
}
export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers:{
        addEmployee:(state,action)=>{
            console.log(action)
            state.employees.push(action.payload)
        },
        updateEmployee:(state,action)=>{

        },
        deleteEmployee:(state,action)=>{

        }
    }
})

export const {addEmployee,updateEmployee,deleteEmployee} = employeeSlice.actions;

export default employeeSlice.reducer