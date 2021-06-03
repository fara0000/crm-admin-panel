import axios from 'axios';
import { newRequestDataInterface } from '../../views/requestsPage/components/body/components/newRequestForm/newRequestData.interface';

const url = 'http://intravision-task.test01.intravision.ru';

export const getTenantsKey = () => {
    return axios.get(`${url}/api/Tenants`)
        .then(response => response.data)
        .catch(error => console.log('getTenantsKey api', error));
};

export const getStatuses = (data: any) => {
    return axios.get(`${url}/api/${data}/Statuses`)
        .then(response => response.data)
        .catch(error => console.log('getStatuses api', error));
};
export const getUsers = (data: any) => {
    return axios.get(`${url}/api/${data}/Users`)
        .then(response => response.data)
        .catch(error => console.log('getStatuses api', error));
};
export const getPriorities = (data: any) => {
    return axios.get(`${url}/api/${data}/Priorities`)
        .then(response => response.data)
        .catch(error => console.log('getPriorities api', error));
};
export const getTasks = (data: any) => {
    return axios.get(`${url}/odata/tasks?tenantguid=${data}`)
        .then(response => response.data.value)
        .catch(error => console.log('getPriorities api', error));
};
export const addNewRequest = (data: newRequestDataInterface, key: string) => {
    return axios.post(`${url}/api/${key}/Tasks`, data)
        .then(response => response.data)
        .catch(error => console.log('getPriorities api', error));
};
export const getTaskById = (id: number, key: string) => {
    return axios.get(`${url}/api/${key}/Tasks/${id}`)
        .then(response => response.data)
        .catch(error => console.log('getPriorities api', error));
};
export const editRequest = (data: object, key: string) => {
    return axios.put(`${url}/api/${key}/Tasks`, data)
        .then(response => response.data)
        .catch(error => console.log('getPriorities api', error));
};
