import { ActionTypes } from './ActionTypes';

export type InitialState = {
    lang: string;
};

const initialState: InitialState = {
    lang: 'en',
}

export default (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE_STORE:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }
}
