import {ActionTypes} from './ActionTypes';
import {newRequestDataInterface} from '../../views/requestsPage/components/body/components/newRequestForm/newRequestData.interface';

export type getRequestsDataType = {
    type: ActionTypes.GET_REQUESTS_DATA;
};
export type getTaskByIdType = {
    type: ActionTypes.GET_TASK_BY_ID;
    data: number;
};
export type editTaskType<T> = {
    type: ActionTypes.EDIT_TASK;
    data: T;
}
export type setTenantsKeyType = {
    type: ActionTypes.SET_TENANTS_KEY;
    data: string;
}
export type setStatusesType = {
    type: ActionTypes.SET_STATUSES;
    data: any;
}
export type setPrioritiesType = {
    type: ActionTypes.SET_PRIORITIES;
    data: any;
}
export type setTasksType = {
    type: ActionTypes.SET_TASKS;
    data: any;
}
export type setUsersType = {
    type: ActionTypes.SET_USERS;
    data: any;
}
export type addNewRequestDataType = {
    type: ActionTypes.ADD_NEW_REQUEST_DATA;
    data: newRequestDataInterface;
}
export type setSelectedTaskType<T> = {
    type: ActionTypes.SET_SELECTED_TASK,
    data: T,
}

export const getRequestsData = (): getRequestsDataType => ({
    type: ActionTypes.GET_REQUESTS_DATA,
});
export const getTaskById = (data: number): getTaskByIdType => ({
    type: ActionTypes.GET_TASK_BY_ID, data
});
export const setTenantsKey = (data: string): setTenantsKeyType => ({
    type: ActionTypes.SET_TENANTS_KEY,
    data,
});
export const setStatuses = (data: any): setStatusesType => ({
    type: ActionTypes.SET_STATUSES,
    data,
});
export const setPriorities = (data: string): setPrioritiesType => ({
    type: ActionTypes.SET_PRIORITIES,
    data,
});
export const setTasks = (data: any): setTasksType => ({
    type: ActionTypes.SET_TASKS,
    data,
});
export const setUsers= (data: any): setUsersType => ({
    type: ActionTypes.SET_USERS,
    data,
});
export const addNewRequestData = (data: newRequestDataInterface): addNewRequestDataType => ({
    type: ActionTypes.ADD_NEW_REQUEST_DATA,
    data,
});
export const setSelectedTask = (data: object): setSelectedTaskType<object> => ({
    type: ActionTypes.SET_SELECTED_TASK,
    data,
});
export const editTask = (data: object): editTaskType<object> => ({
    type: ActionTypes.EDIT_TASK,
    data,
});