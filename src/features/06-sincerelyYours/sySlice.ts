import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    'idk': 'idk',
}

export const sySlice = createSlice({
    name: "sincerelyYours",
    initialState,
    reducers: {
        setSY: (state, action:any) => {
            state = action.payload;
        }
    }
})

export const { setSY } = sySlice.actions;
export default sySlice.reducer;