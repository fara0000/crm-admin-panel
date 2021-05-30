import React, {FC, useMemo} from 'react';
import './index.scss';
import { columnType } from './tableColumn.interface';
import { Table } from 'antd';

const {
    Column,
} = Table;

export interface Props<T> {
    data: Array<T>;
    columns: Array<columnType>;
}

export const TableContent: FC<Props<object>> = (props) => {
    const {
        data,
        columns
    } = props;

    const renderColumns = useMemo(() => columns?.map((item: columnType) => (<Column
        key={item.key}
        title={item.title}
        dataIndex={item.dataIndex}
        onCellClick={(event: any) => console.log(event.target.value)}
    />)), [ columns ]);

    return (
        <div className='table-wrapper'>
            <Table
                dataSource={data}
            >
                {renderColumns}
            </Table>
        </div>
    )
}

export default TableContent;