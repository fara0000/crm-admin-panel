import React, {FC, useEffect, useMemo, useState} from 'react';
import './index.scss';
import { columnType } from './tableColumn.interface';
import { Table, Tag } from 'antd';

const {
    Column,
} = Table;

export interface Props<T> {
    data: Array<T>;
    columns: Array<columnType>;
    handleEditForm?: any;
    getSelectedTaskId?: any;
}

export const TableContent: FC<Props<object>> = (props) => {
    const {
        data,
        columns,
        handleEditForm,
        getSelectedTaskId,
    } = props;
    const [renderColumns, setRenderColumns] = useState<any>([]);
    const [statusColorsMap, setStatusColorsMap] = useState<any>({});

    const handleTask = (row: any) => {
        getSelectedTaskId(row.id)
        handleEditForm();
    }

    useEffect(() => {
        setStatusColorsMap({});
        data?.forEach((item: any) => statusColorsMap[item.statusName] = (
            <div
                style={{
                    color: 'white',
                    display: "flex",
                    borderRadius: 20,
                    justifyContent: "center",
                    backgroundColor: `${item.statusRgb}`,

                }}
            >
                {item.statusName}
            </div>
        ));

        setRenderColumns(columns?.map((item: any) => (
            <Column
                key={item.title}
                title={item.title}
                dataIndex={item.dataIndex}
                onCellClick={(row: any) => handleTask(row)}
                render={item.key === 'statusName' ? ((statusName: string) => statusColorsMap[statusName]) : null}
            />
        )))
    }, [data]);

    return (
        <div className='table-wrapper'>
            <Table
                dataSource={data}
            >
                {renderColumns}
            </Table>
        </div>
    )
};

export default TableContent;