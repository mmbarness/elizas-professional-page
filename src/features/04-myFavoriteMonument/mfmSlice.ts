import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    'idk': 'idk',
}

export const mfmSlice = createSlice({
    name: "myFavoriteMonument",
    initialState,
    reducers: {
        setMFM: (state, action:any) => {
            state = action.payload;
        }
    }
})

export const { setMFM } = mfmSlice.actions;
export default mfmSlice.reducer;