import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    'idk': 'idk',
}

export const hobbyDeathSlice = createSlice({
    name: "hobbyDeath",
    initialState,
    reducers: {
        setHobbyDeath: (state, action:any) => {
            state = action.payload;
        }
    }
})

export const { setHobbyDeath } = hobbyDeathSlice.actions;
export default hobbyDeathSlice.reducer;