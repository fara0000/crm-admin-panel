import React, { FC } from 'react';
import BodyRequestPage from './components/body';
import HeaderRequestPage from './components/header';
import './index.scss';

export const RequestPage: FC = () => {
    return (
        <div className='request-page-wrapper'>
            <HeaderRequestPage />
            <BodyRequestPage />
        </div>
    )
}

export default RequestPage;