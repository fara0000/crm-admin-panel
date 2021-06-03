import React, { FC } from 'react';
import history from '../../router/history';
import { Link } from 'react-router-dom';
import { A } from 'hookrouter';
import LogoIcon from '../../assets/svg/logoIcon';
import StuffIcon from '../../assets/svg/stuffIcon';
import { Select } from 'antd';
import ClientIcon from '../../assets/svg/clientIcon';
import ActiveIcon from '../../assets/svg/activeIcon';
import SettingIcon from '../../assets/svg/settingIcon';
import RequestIcon from '../../assets/svg/requestIcon';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import KnowledgeBaseIcon from '../../assets/svg/knoledgeBaseIcon';
import * as languageManagerActions from '../../managers/languageManager/actions';
import './index.scss';

const { Option } = Select;

export const LeftSideBarMenu: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <div className='drawer-menu-wrapper'>
            <A href={'/'}>
                <div className='drawer-menu__logo-container'>
                    <LogoIcon />
                </div>
            </A>
            <div className='drawer-menu__link-item-container'>
                <A href={'/knowledge'}>
                    <div className='link-item-container'>
                        <KnowledgeBaseIcon />
                        <span className='link-item-container__link-title'>
                            {t('knowledgeBase')}
                        </span>
                    </div>
                </A>
                <A href={'/'}>
                    <div className='link-item-container'>
                        <RequestIcon />
                        <span className='link-item-container__link-title'>
                            {t('requests')}
                        </span>
                    </div>
                </A>
                <A href={'/stuff'}>
                    <div className='link-item-container'>
                        <StuffIcon />
                        <span className='link-item-container__link-title'>
                        {t('stuff')}
                    </span>
                    </div>
                </A>
                <A href={'/clients'}>
                    <div className='link-item-container' >
                        <ClientIcon />
                        <span className='link-item-container__link-title'>
                            {t('clients')}
                        </span>
                    </div>
                </A>
                <A href={'/actives'}>
                    <div className='link-item-container'>
                        <ActiveIcon />
                        <span className='link-item-container__link-title'>
                            {t('actives')}
                        </span>
                    </div>
                </A>
                <A href={'/settings'}>
                    <div className='link-item-container'>
                        <SettingIcon />
                        <span className='link-item-container__link-title'>
                            {t('settings')}
                        </span>
                    </div>
                </A>
            </div>
            <div>
                <Select defaultValue={"en"} style={{ width: 90 }} onChange={(value: string) => {
                    dispatch(languageManagerActions.changeLanguageStore(value));
                }}>
                    <Option value='ru'>ru</Option>
                    <Option value='en'>en</Option>
                </Select>
            </div>
        </div>
    )
}

export default LeftSideBarMenu;