import React, { FC } from 'react';
import './index.scss';
import { Button } from "antd";

export interface Props {
    handleNewRequestForm: any;
}

export const BodyHeaderContent: FC<Props> = (props) => {
    const {
        handleNewRequestForm,
    } = props;

    const buttonStyle = {
        width: 181,
    }

    return (
        <div className='body-header-content-wrapper'>
            <div className='body-header-content__button-wrapper'>
                <Button type="primary" size='large' shape="round" style={buttonStyle} onClick={handleNewRequestForm}>
                    {'Создать заявку'}
                </Button>
            </div>
        </div>
    )
}

export default BodyHeaderContent;