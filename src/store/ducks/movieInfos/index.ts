import { Reducer } from "@reduxjs/toolkit";
import { IMovieInfos, MovieInfosState, MovieInfosTypes } from "./types";

const INITIAL_STATE: MovieInfosState = {
    result: null,
    error: false,
    loading: false,
}

const reducer: Reducer<MovieInfosState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case MovieInfosTypes.LOAD_REQUEST:
            return { ...state, loading: true}
        case MovieInfosTypes.LOAD_SUCCESS:
            const resultLoadRequest = action.payload as {data: IMovieInfos};
            return { ...state, loading: false, error: false, result: resultLoadRequest.data}
        case MovieInfosTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: null}
        default: 
            return state;
    }
}

export default reducer;