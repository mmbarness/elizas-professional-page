import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    'idk': 'idk',
}

export const mhSlice = createSlice({
    name: "myHusband",
    initialState,
    reducers: {
        setMH: (state, action:any) => {
            state = action.payload;
        }
    }
})

export const { setMH } = mhSlice.actions;
export default mhSlice.reducer;