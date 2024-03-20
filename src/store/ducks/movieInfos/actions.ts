import { action } from "typesafe-actions";
import { MovieInfosTypes } from "./types";
import { IMovieInfos } from "../../../types/movies.interface";

//Get a movie
export const loadRequest = (data: string) => action(MovieInfosTypes.LOAD_REQUEST, {data});

export const loadSuccess = (data: IMovieInfos | null) => action(MovieInfosTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(MovieInfosTypes.LOAD_FAILURE);