import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    'idk': 'idk',
}

export const mvSlice = createSlice({
    name: "musicVideos",
    initialState,
    reducers: {
        setMVs: (state, action:any) => {
            state = action.payload;
        }
    }
})

export const { setMVs } = mvSlice.actions;
export default mvSlice.reducer;