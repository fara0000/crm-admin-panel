import React, { FC } from 'react';
import { Drawer } from 'antd';
import './index.scss';

export interface Props {
    width: string;
    title: string;
    height: string;
    visible: boolean;
    onClose: any;
    children: any;
}

export const DrawerComponent: FC<Props> = (props) => {
    const {
        width,
        title,
        height,
        visible,
        onClose,
        children,
    } = props;

    return (
        <Drawer
            width={width}
            title={title}
            height={height}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
        >
            { children }
        </Drawer>
    )
}

export default DrawerComponent;