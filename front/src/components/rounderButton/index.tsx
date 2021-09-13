import React, { FC } from 'react';
import './index.scss';
import { Button } from 'antd';

export interface Props {
    style: any;
    title: string;
    handle: any;
}

export const RounderButton: FC<Props> = ({ style, title, handle }: Props) => (
    <>
        <Button type="primary" size='large' shape="round" style={style} onClick={handle}>
            {title}
        </Button>
    </>
);

export default RounderButton;