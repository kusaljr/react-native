import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    room_id: null,
    socket: null
}

export const detailSlice = createSlice({
    name: "details",
    initialState: initialState ,
    reducers: {
        setName: (state, action)=>{
            state.name = action.payload
        },
        setRoomId : (state, action)=>{
            state.room_id = action.payload
        },
        setSocket :(state, action)=>{
            state.socket = action.payload
        }
    }
})

export const {setName, setRoomId, setSocket} = detailSlice.actions
export default detailSlice.reducer