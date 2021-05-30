import React, { FC } from 'react';
import TableContent from '../../../../../../components/tableContent';
import './index.scss';

export interface Props<T> {
    data: Array<T>;
}

export const TableRow: FC<Props<object>> = (props) => {
    const {
        data,
    } = props;

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
            key: 'status',
            title: 'Статус',
            dataIndex: 'status',
        },
        {
            key: 'author',
            title: 'Испольнитель',
            dataIndex: 'author',
        },
    ];



    return (
        <div className='table-row-wrapper'>
            <TableContent columns={columns} data={data}/>
        </div>
    )
}

export default TableRow;