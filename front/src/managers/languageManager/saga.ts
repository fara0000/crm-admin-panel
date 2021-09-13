import { takeEvery, call } from 'redux-saga/effects';
import { ActionTypes } from './ActionTypes';
import { changeLanguage } from '../../localization/localization';
import * as languageActions from '../languageManager/actions';

export default function* watchLanguageManager() {
    yield takeEvery(ActionTypes.CHANGE_LANGUAGE_STORE, handleChangeLanguage);
}

export function* handleChangeLanguage(action: languageActions.ChangeLanguageStoreType) {
    if (!action.data) {
        return;
    }
    yield call(changeLanguage, action.data);
}
