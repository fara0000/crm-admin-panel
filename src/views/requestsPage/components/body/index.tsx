import React, {FC, useState} from 'react';
import TableRow from './components/TableRow';
import NewRequestForm from './components/newRequestForm';
import EditRequestForm from './components/editRequestForm';
import BodyHeaderContent from './components/BodyHeaderContent';
import * as requestPageActions from '../../../../managers/requestsPageManager/actions';
import * as requestPageSelectors from '../../../../managers/requestsPageManager/selectors';
import * as languageSelectors from '../../../../managers/languageManager/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './index.scss';

export const BodyRequestPage: FC = () => {
    const data = useSelector(requestPageSelectors.getTasks, shallowEqual);
    const users = useSelector(requestPageSelectors.getUsers, shallowEqual);
    const locale = useSelector(languageSelectors.getLocale, shallowEqual);
    const statuses = useSelector(requestPageSelectors.getStatuses, shallowEqual);
    const selectedTask = useSelector(requestPageSelectors.getSelectedTask, shallowEqual);
    const dispatch = useDispatch();
    const [ name, setName] = useState('');
    const [ visible, setVisible] = useState(false);
    const [ visibleEditForm, setVisibleEditForm] = useState(false);
    const [ description, setDescription] = useState('');

    const handleNewRequestForm = () => {
        setVisible(!visible);
    }

    const handleEditForm = () => {
        setVisibleEditForm(!visibleEditForm);
    }

    const handleName = (value: string) => {
        setName(value);
    }

    const handleDescription = (value: string) => {
        setDescription(value);
    }

    const clearInputs = () => {
        setName('');
        setDescription('');
    }

    const sendNewRequestData = () => {
        dispatch(requestPageActions.addNewRequestData({ name: name, description: description }));

        clearInputs();

        handleNewRequestForm();
    }

    return (
        <div className='body-request-page-wrapper'>
            <BodyHeaderContent
                handleNewRequestForm={handleNewRequestForm}
            />
            <TableRow
                data={data}
                handleEditForm={handleEditForm}
            />
            <NewRequestForm
                visible={visible}
                onClose={handleNewRequestForm}
                handleName={handleName}
                name={name}
                description={description}
                handleDescription={handleDescription}
                sendNewRequestData={sendNewRequestData}
            />
            <EditRequestForm
                users={users}
                locale={locale}
                visible={visibleEditForm}
                onClose={handleEditForm}
                statuses={statuses}
                selectedTask={selectedTask}
            />
        </div>
    )
}

export default BodyRequestPage;