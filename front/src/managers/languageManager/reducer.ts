import { ActionTypes } from './ActionTypes';
import { ActionType } from './actions';

export type InitialState = {
    lang: string;
};

const initialState: InitialState = {
    lang: 'en',
}

export default (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE_STORE:
            return {
                ...state,
                lang: action.data,
            }
        default:
            return state;
    }
}
