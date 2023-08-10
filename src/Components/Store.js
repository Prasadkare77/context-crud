import {configureStore} from '@reduxjs/toolkit'

import employeeSlice from './employeeSlice'

export const Store = configureStore({
    reducer:{},
    employee: employeeSlice,
})