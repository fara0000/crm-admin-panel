import React, { FC } from 'react';
import RounderButton from '../../../../../../components/rounderButton';
import DrawerComponent from '../../../../../../components/drawer';
import { Form, Col, Row, Input } from 'antd';
import './index.scss';

export interface Props {
    name: string;
    visible: boolean;
    onClose: any;
    handleName: any;
    description: string;
    handleDescription: any;
    sendNewRequestData: any;
}

export const NewRequestForm: FC<Props> = (props) => {
    const {
        name,
        visible,
        onClose,
        handleName,
        description,
        handleDescription,
        sendNewRequestData,
    } = props;

    return (
        <>
            <DrawerComponent
                title={"Новая запись"}
                width={'60%'}
                height={'auto'}
                onClose={onClose}
                visible={visible}
                children={
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label={'Название'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter url description',
                                        },
                                    ]}
                                >
                                    <Input.TextArea
                                        rows={4}
                                        value={name}
                                        style={{minHeight: '80px', maxHeight: '80px', borderRadius: 0}}
                                        onChange={event => handleName(event.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label={'Описание'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter url description',
                                        },
                                    ]}
                                >
                                    <Input.TextArea
                                        rows={4}
                                        value={description}
                                        style={{minHeight: '120px', maxHeight: '120px', borderRadius: 0}}
                                        onChange={event => handleDescription(event.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item>
                                    <RounderButton
                                        title={'Сохранить'}
                                        style={{ width: 181 }}
                                        handle={sendNewRequestData}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                }
            />
        </>
    )
}

export default NewRequestForm;