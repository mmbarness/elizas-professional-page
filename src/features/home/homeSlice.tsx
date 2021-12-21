import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    'LOADED': false,
}

export interface IAppState {
    info: string
}

type HomeInfo = {
    info: string
}

// export const fetchInfo = createAsyncThunk<HomeInfo, never, { rejectValue: string }>(
//     'about/fetchInfo',
//     async () => {
//       const response = await new Promise((resolve, reject) => {})
//       return response
//     }
// );

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchInfo.fulfilled.type, (state, {payload}:any) => {
    //       for (const item of payload) {
    //         state.info = item
    //       }
    //       state['LOADED'] = true; 
    //       return state; 
    //     })
    // },
});


export default aboutSlice.reducer