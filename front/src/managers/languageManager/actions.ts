import { ActionTypes } from './ActionTypes';

export type changeLanguageStoreType = {
    type: ActionTypes.CHANGE_LANGUAGE_STORE;
    data: string;
};

export const changeLanguageStore = (data: string): changeLanguageStoreType => ({
    type: ActionTypes.CHANGE_LANGUAGE_STORE,
    data,
})