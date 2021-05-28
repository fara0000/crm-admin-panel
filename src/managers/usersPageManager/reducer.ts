import { ActionTypes } from './ActionTypes';

export type InitialState = {
    userList: Array<any>;
    isDeleteModalOpen: boolean;
};

export const initialState: InitialState = {
    userList: [],
    isDeleteModalOpen: false,
}

export default (state = initialState, action: any): InitialState => {
    const { type, data } = action;

    switch (type) {
    case ActionTypes.SET_USER_LIST:
        return {
            ...state,
            userList: data,
        };
    case ActionTypes.IS_DELETE_MODAL_OPEN:
        return {
            ...state,
            isDeleteModalOpen: !state.isDeleteModalOpen,
        };
    default:
        return state;
    }
};