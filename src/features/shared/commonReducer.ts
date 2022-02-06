import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "../01-home/homeSlice";
import diarySlice from "../02-diary/diarySlice";
import hdSlice from "../03-hobbyDeath/hdSlice";
import mfmSlice from "../04-myFavoriteMonument/mfmSlice";
import smSlice from "../05-selfMaintaining/smSlice";
import sySlice from "../06-sincerelyYours/sySlice";
import mvSlice from "../07-musicVideos/mvSlice";
import mhSlice from "../08-myHusband/mhSlice";


const commonReducer = combineReducers({
    homeSlice,
    diarySlice,
    hdSlice,
    mfmSlice,
    smSlice,
    sySlice,
    mhSlice,
    mvSlice,
})

export default commonReducer;