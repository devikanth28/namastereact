import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        addUser:(state, action)=>{
            state.users.push(action.payload);
        },
        removeUser : (state, action)=>{
            const filtered = state.users.filter((eachUser => eachUser.name !== action.payload));
            state.users.push(filtered);
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer