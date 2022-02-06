import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialSliceState } from "./types";
import { DiaryEntry } from './types'

const initialState: InitialSliceState = {
    diaryEntries: [],
    isLoading: false,
    error: null,
}

export const diarySlice = createSlice({
    name: "diary",
    initialState,
    reducers: {
        setDiaryEntries: (state, action: PayloadAction<Array<DiaryEntry>>) => {
            state.diaryEntries = action.payload;
        }
    }
})

export const { setDiaryEntries } = diarySlice.actions;
export default diarySlice.reducer;