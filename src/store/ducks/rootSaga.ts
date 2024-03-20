import { all, takeLatest } from 'redux-saga/effects'

import { MovieInfosTypes } from './movieInfos/types'
import { getMovieInfo } from './movieInfos/sagas';

export default function* rootSaga(): Generator{
    return yield all([
        takeLatest(MovieInfosTypes.LOAD_REQUEST, getMovieInfo),
    ]);
}