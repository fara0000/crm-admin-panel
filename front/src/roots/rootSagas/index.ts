import '@babel/polyfill';
import {
    all,
    call,
} from 'redux-saga/effects';
import watcherRequestsPage from '../../managers/requestsPageManager/saga';
import watcherLanguageManager from '../../managers/languageManager/saga';

const sagaList: any = [
    watcherRequestsPage,
    watcherLanguageManager,
];

export default function* watchRootSagas() {
    yield all(sagaList.map((saga: any) => call(saga)))
}