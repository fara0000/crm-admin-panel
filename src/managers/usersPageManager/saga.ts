import {
    put,
    call,
    takeEvery,
} from 'redux-saga/effects';
import { ActionTypes } from './ActionTypes';
import * as usersPageApi from '../../api/userPageApi/api';
import * as usersPageActions from './actions';
import history from '../../modules/history';

export default function* watcherUserPage() {
    yield takeEvery(ActionTypes.GET_USER_LIST, workerGetUserList);
    yield takeEvery(ActionTypes.REDIRECT_TO_POST_PAGE, workerRedirectToPostPage);
}

export function* workerGetUserList() {
    try {
        const usersDataList = yield call(usersPageApi.getUserList);

        yield put(usersPageActions.setUserList(usersDataList));
    } catch (error) {
        console.log('workerGetUserList worker error', error)
    }
}

export function* workerRedirectToPostPage()  {
    try {
        yield call(history.push, '/posts')
    } catch (error) {
        console.log('workerRedirectToPostPage worker error', error)
    }
}