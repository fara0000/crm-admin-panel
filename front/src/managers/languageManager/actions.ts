import { ActionTypes } from './ActionTypes';

export type ChangeLanguageStoreType = {
    type: ActionTypes.CHANGE_LANGUAGE_STORE;
    data: string;
};

export const changeLanguageStore = (data: string): ChangeLanguageStoreType => ({
    type: ActionTypes.CHANGE_LANGUAGE_STORE,
    data,
});

export type ActionType = ChangeLanguageStoreType;