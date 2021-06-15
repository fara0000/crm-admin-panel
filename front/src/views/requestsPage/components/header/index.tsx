import React, { FC } from 'react';
import './index.scss';
import SearchInput from '../../../../components/seacrhInput';

export const HeaderRequestPage: FC = () => {
    return (
        <div className='header-request-page-wrapper'>
            <SearchInput />
        </div>
    )
}

export default HeaderRequestPage;