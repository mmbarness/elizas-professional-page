import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    'idk': 'idk',
}

export const smSlice = createSlice({
    name: "selfMaintaining",
    initialState,
    reducers: {
        setSM: (state, action:any) => {
            state = action.payload;
        }
    }
})

export const { setSM } = smSlice.actions;
export default smSlice.reducer;