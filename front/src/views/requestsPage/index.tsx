import React, {FC, useEffect} from 'react';
import BodyRequestPage from './components/body';
import HeaderRequestPage from './components/header';
import * as requestsPageActions from '../../managers/requestsPageManager/actions';
import './index.scss';
import { useDispatch } from 'react-redux';

export const RequestPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestsPageActions.getRequestsData());
    }, [])

    return (
        <div className='request-page-wrapper'>
            <HeaderRequestPage />
            <BodyRequestPage />
        </div>
    )
}

export default RequestPage;