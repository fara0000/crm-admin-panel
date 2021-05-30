import React, { FC } from 'react';
import { Button, Drawer, Form } from 'antd';
import './index.scss';

export interface Props {
    visible: boolean;
    onClose: any;
}

export const NewRequest: FC<Props> = (props) => {
    const {
        visible,
        onClose,
    } = props;

    return (
        <>
            <Drawer
                title="Create a new account"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={'50%'}
                height={'auto'}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form layout="vertical">
                    <Button onClick={onClose} type="primary">
                        Submit
                    </Button>
                </Form>
            </Drawer>
        </>
    )
}

export default NewRequest;