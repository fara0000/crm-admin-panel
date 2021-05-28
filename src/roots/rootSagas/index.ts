import '@babel/polyfill';
import {
    all,
    call,
} from 'redux-saga/effects';
import watcherUserPage from '../../managers/usersPageManager/saga';

const sagaList: any = [
    watcherUserPage,
];

export default function* watchRootSagas() {
    yield all(sagaList.map((saga: any) => call(saga)))
}