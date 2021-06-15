import { ActionTypes } from './ActionTypes';

export type InitialState<T> = {
    tasks: Array<T>;
    users: Array<T>;
    statuses: Array<T>;
    priorities: Array<T>;
    tenantsKey: string;
    selectedTask: T;
};

export const initialState: InitialState<object> = {
    tasks: [],
    users: [],
    statuses: [],
    priorities: [],
    tenantsKey: '',
    selectedTask: {},
}

export default (state = initialState, action: any): InitialState<object> => {
    const { type, data } = action;

    switch (type) {
    case ActionTypes.SET_TENANTS_KEY:
        return {
            ...state,
            tenantsKey: data,
        };
    case ActionTypes.SET_STATUSES:
        return {
            ...state,
            statuses: data,
        };
    case ActionTypes.SET_PRIORITIES:
        return {
            ...state,
            priorities: data,
        };
    case ActionTypes.SET_TASKS:
        return {
            ...state,
            tasks: data,
        };
    case ActionTypes.SET_SELECTED_TASK:
        return {
            ...state,
            selectedTask: data,
        };
    case ActionTypes.SET_USERS:
        return {
            ...state,
            users: data,
        }
    default:
        return state;
    }
};