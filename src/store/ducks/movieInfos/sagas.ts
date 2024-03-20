import { call, put } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import { api } from '../../../service/api';
import { IMovieInfos } from '../../../types/movies.interface';

export function* getMovieInfo(data: any){
    try {
        const response: {data: IMovieInfos} = yield call(api.get, `/?apikey=932c9248&t=${data.payload.data}`)
        yield put(loadSuccess(response.data.Title ? response.data : null))
    }catch(err) {
        yield put(loadFailure())
    }
}