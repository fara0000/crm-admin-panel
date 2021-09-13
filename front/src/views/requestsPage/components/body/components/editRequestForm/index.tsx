import React, {
    FC,
    useState,
    useEffect,
} from 'react';
import RounderButton from '../../../../../../components/rounderButton';
import DrawerComponent from '../../../../../../components/drawer';
import { useDispatch } from 'react-redux';
import * as requestPageActions from '../../../../../../managers/requestsPageManager/actions';
import { Form, Col, Row, Input, Select } from 'antd';
import { formatCommentDate, formatYearDate } from './logic';
import './index.scss';

const { Option } = Select;

type userType = {
    id: number;
    name: string;
};

type statusType = {
    id: number;
    rgb: string;
    name: string;
}

export interface Props {
    users: Array<userType>;
    locale: string;
    onClose: any;
    visible: boolean;
    statuses: Array<statusType>;
    selectedTask: any;
}

type tagType = {
    id: number;
    name: string;
}

export const EditRequestForm: FC<Props> = (props) => {
    const {
        users,
        locale,
        visible,
        onClose,
        statuses,
        selectedTask,
    } = props;
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(selectedTask.executorId);
    const [comment, setComment] = useState('');
    const [statusId, setStatusId] = useState(selectedTask.statusId);
    const [userValue, setUserValue] = useState(selectedTask.executorName);
    const [statusValue, setStatusValue] = useState(selectedTask.statusName);

    const commentBlockStyle = {
        borderRadius: 5,
        backgroundColor: '#E3E9F4',
        filter: 'drop-shadow(0 0 1.5px rgba(0,0,0,0.2))',
        marginTop: 10,
    };

    const tagBlockStyle = {
        width: '70px',
        cursor: 'pointer',
        height: '20px',
        border: '1px solid #9da1aa',
        display: 'flex',
        marginTop: '3px',
        alignItems: 'center',
        borderRadius: '10px',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    };

    useEffect(() => {
        setUserId(selectedTask.executorId);
        setStatusId(selectedTask.statusId);
        setUserValue(selectedTask.executorName);
        setStatusValue(selectedTask.statusName);
    }, [selectedTask]);

    const cleanComment = () => {
        setComment('');
    }

    const editRequestData = () => {
        dispatch(requestPageActions.editTask({
            id: selectedTask.id,
            comment: (comment) ? comment : undefined,
            statusId,
            executorId: userId,
        }));

        cleanComment();
        onClose();
    }

    return (
        <DrawerComponent
            title={`№ ${selectedTask.id} ${selectedTask.name}`}
            width={'60%'}
            height={'auto'}
            onClose={onClose}
            visible={visible}
            children={
                <Form layout="vertical">
                    <Row>
                        <Col span={19}>
                            <Row>
                                <span>
                                    Описание
                                </span>
                                <div>
                                    {selectedTask.description}
                                </div>
                            </Row>
                            <Row className={'first-col-row-item'}>
                                <Form.Item
                                    label={'Комментарии'}
                                >
                                    <Input.TextArea
                                        rows={4}
                                        value={comment}
                                        style={{minHeight: '120px', maxHeight: '120px', borderRadius: 0}}
                                        onChange={(event: any) => setComment(event.target.value)}
                                    />
                                    <RounderButton
                                        style={{ marginTop: '10px', width: 181 }}
                                        title={'Сохранить'}
                                        handle={editRequestData}
                                    />
                                </Form.Item>
                            </Row>
                            <Row className={'first-col-row-item'}>
                                {
                                    selectedTask.lifetimeItems?.map((item: any, index: number) =>
                                        <>
                                            {index !== 0 && <hr/>}
                                            <div
                                                key={item.id}
                                            >
                                                <span>{item.userName}</span>
                                                <br/>
                                                <span>
                                                    {`${formatCommentDate(item.createdAt, locale)} прокоментировал`}
                                                </span>
                                                <div style={commentBlockStyle}>
                                                    <p style={{
                                                        padding: '5px 5px 15px 10px',
                                                    }}>
                                                        {item.comment}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </Row>
                        </Col>
                        <Col span={5} style={{ paddingLeft: 30 }}>
                            <Row>
                                <Select
                                    value={statusValue}
                                    onChange={(value: string) => {
                                        setStatusValue(value);
                                        setStatusId(
                                            statuses?.find((status: statusType) => status.name === value)?.id
                                        );
                                    }}>
                                    {
                                        statuses?.map((item: any) => <Option
                                            key={item.name}
                                            value={item.name}
                                        >
                                            {item.name}
                                        </Option>)
                                    }
                                </Select>
                            </Row>
                            <Row className={'second-col-row-item'}>
                                <Form.Item label={'Заявитель'}>
                                    {selectedTask.executorGroupName}
                                </Form.Item>
                            </Row>
                            <Row className={'second-col-row-item'}>
                                <Form.Item label={'Создана'}>
                                   <span>
                                       {selectedTask.initiatorName}
                                   </span>
                                </Form.Item>
                            </Row>
                            <Row className={'second-col-row-item'}>
                                <Form.Item label={'Исполнитель'}>
                                    <Select
                                        value={userValue}
                                        onChange={(value: string) => {
                                            setUserValue(value);
                                            setUserId(
                                                users?.find((user: userType) => user.name === value)?.id
                                            );
                                        }}
                                        style={{ color: '#1974D2' }}
                                    >
                                        {
                                            users?.map((item: any) => <Option
                                                key={item.id}
                                                value={item.name}
                                            >
                                                {item.name}
                                            </Option>)
                                        }
                                    </Select>
                                </Form.Item>
                            </Row>
                            <Row className={'second-col-row-item'}>
                                <Form.Item label={'Приоритет'}>
                                    <span>
                                        {selectedTask.priorityName}
                                    </span>
                                </Form.Item>
                            </Row>
                            <Row className={'second-col-row-item'}>
                                <Form.Item label={'Срок'}>
                                    <span>
                                        {`${formatYearDate(selectedTask.resolutionDatePlan)}г`}
                                    </span>
                                </Form.Item>
                            </Row>
                            <Row className={'second-col-row-item'}>
                                <Form.Item label={'Теги'}>
                                    {selectedTask.tags?.map((item: tagType) => (
                                        <div
                                            key={item.id}
                                            style={tagBlockStyle}
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                                </Form.Item>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            }
        />
    )
}

export default EditRequestForm;