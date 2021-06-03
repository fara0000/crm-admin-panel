import React, { FC } from 'react';
import './index.scss';
import RounderButton from '../../../../../../components/rounderButton';
import { useTranslation } from 'react-i18next';

export interface Props {
    handleNewRequestForm: any;
}

export const BodyHeaderContent: FC<Props> = (props) => {
    const {
        handleNewRequestForm,
    } = props;
    const { t } = useTranslation();

    const buttonStyle = {
        width: 181,
    }

    return (
        <div className='body-header-content-wrapper'>
            <div className='body-header-content__button-wrapper'>
                    <RounderButton
                        style={{ width: 181 }}
                        title={t('createRequest')}
                        handle={handleNewRequestForm}
                    />
            </div>
        </div>
    )
}

export default BodyHeaderContent;