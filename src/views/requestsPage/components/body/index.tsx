import React, {FC, useState} from 'react';
import TableRow from "./components/TableRow";
import { mockData } from './config';
import NewRequest from '../newRequestForm';
import BodyHeaderContent from './components/BodyHeaderContent';
import './index.scss';

export const BodyRequestPage: FC = () => {
    const [ visible, setVisible] = useState(false);

    const handleNewRequestForm = () => {
        setVisible(!visible);
    }

    return (
        <div className='body-request-page-wrapper'>
            <BodyHeaderContent handleNewRequestForm={handleNewRequestForm} />
            <TableRow data={mockData}/>
            <NewRequest visible={visible} onClose={handleNewRequestForm} />
        </div>
    )
}

export default BodyRequestPage;