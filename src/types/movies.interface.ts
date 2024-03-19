import { IRating } from "./rating.interface";

export interface IMovieInfos {
    Actors: string;
    Plot: string;
    Poster: string;
    Title: string;
    Ratings: IRating[];
}