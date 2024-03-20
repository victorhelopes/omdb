 //Action Types
export enum MovieInfosTypes {
    LOAD_REQUEST = '@movieInfos/LOAD_REQUEST',
    LOAD_SUCCESS = '@movieInfos/LOAD_SUCCESS',
    LOAD_FAILURE = '@movieInfos/LOAD_FAILURE',
}
  
//Data Types
export interface IMovieInfos {
  Actors: string;
  Plot: string;
  Poster: string;
  Title: string;
  Ratings: IRating[];
}

export interface IRating{
  Value: string;
}

//State type
export interface MovieInfosState {
  readonly result: IMovieInfos | null;
  readonly error: boolean;
  readonly loading: boolean;
}