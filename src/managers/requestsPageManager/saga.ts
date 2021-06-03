import {
    put,
    call,
    select,
    delay,
    takeEvery,
} from 'redux-saga/effects';
import { ActionTypes } from './ActionTypes';
import * as requestsPageApi from '../../api/requestsPageApi/api';
import * as requestsPageActions from './actions';
import * as requestsPageSelectors from './selectors';

export default function* watcherUserPage() {
    yield takeEvery(ActionTypes.EDIT_TASK, workerEditTask);
    yield takeEvery(ActionTypes.GET_TASK_BY_ID, workerGetTaskByID);
    yield takeEvery(ActionTypes.GET_REQUESTS_DATA, workerRequestsData);
    yield takeEvery(ActionTypes.ADD_NEW_REQUEST_DATA, addNewRequestData);
}

export function* workerRequestsData() {
    try {
        const key = yield call(requestsPageApi.getTenantsKey);
        const tasks = yield call(requestsPageApi.getTasks, key);
        const users = yield call(requestsPageApi.getUsers, key);
        const statuses = yield call(requestsPageApi.getStatuses, key);
        const priorities = yield call(requestsPageApi.getPriorities, key);

        yield put(requestsPageActions.setTenantsKey(key));
        yield put(requestsPageActions.setTasks(tasks));
        yield put(requestsPageActions.setUsers(users));
        yield put(requestsPageActions.setStatuses(statuses));
        yield put(requestsPageActions.setPriorities(priorities));

    } catch (error) {
        console.log('workerGetTenantsKey worker error', error)
    }
}

export function* addNewRequestData({ data }: requestsPageActions.addNewRequestDataType) {
    const key = yield select(requestsPageSelectors.getTenantsKey);
    console.log('data', data)

    try {
        yield call(requestsPageApi.addNewRequest, data, key);
        const tasks = yield call(requestsPageApi.getTasks, key);

        yield put(requestsPageActions.setTasks(tasks));
    } catch (error) {
        console.log('addNewRequestData worker error', error)
    }
}

export function* workerGetTaskByID ({ data }: requestsPageActions.getTaskByIdType) {
    const key = yield select(requestsPageSelectors.getTenantsKey);

    try {
        const selectedTask = yield call(requestsPageApi.getTaskById, data, key);

        yield put(requestsPageActions.setSelectedTask(selectedTask));
    } catch (error) {
        console.log('workerGetTaskByID worker error', error)
    }
}

export function* workerEditTask ({ data }: requestsPageActions.editTaskType<object>) {
    const key = yield select(requestsPageSelectors.getTenantsKey);

    try {
        yield call(requestsPageApi.editRequest, data, key);
        const tasks = yield call(requestsPageApi.getTasks, key);

        yield put(requestsPageActions.setTasks(tasks));
    } catch (error) {
        console.log('workerGetTaskByID worker error', error)
    }
}