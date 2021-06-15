import React, { FC } from 'react';
import TableContent from '../tableContent';
import { useDispatch } from 'react-redux';
import * as requestPageActions from '../../../../../../managers/requestsPageManager/actions';
import './index.scss';

export interface Props<T> {
    data: Array<T>;
    handleEditForm: any;
}

export const TableRow: FC<Props<object>> = (props) => {
    const {
        data,
        handleEditForm,
    } = props;
    const dispatch = useDispatch();

    const getSelectedTaskId = (id: number) => {
        dispatch(requestPageActions.getTaskById(id));
    }

    const columns = [
        {
            key: 'id',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: 'name',
            title: 'Название',
            dataIndex: 'name',
        },
        {
            key: 'statusName',
            title: 'Статус',
            dataIndex: 'statusName',
        },
        {
            key: 'executorName',
            title: 'Испольнитель',
            dataIndex: 'executorName',
        },
    ];



    return (
        <div className='table-row-wrapper'>
            <TableContent
                data={data}
                columns={columns}
                handleEditForm={handleEditForm}
                getSelectedTaskId={getSelectedTaskId}
            />
        </div>
    )
}

export default TableRow;