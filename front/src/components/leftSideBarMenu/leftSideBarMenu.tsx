import React, { FC } from 'react';
import LogoIcon from '../../assets/svg/logoIcon';
import StuffIcon from '../../assets/svg/stuffIcon';
import ClientIcon from '../../assets/svg/clientIcon';
import ActiveIcon from '../../assets/svg/activeIcon';
import SettingIcon from '../../assets/svg/settingIcon';
import RequestIcon from '../../assets/svg/requestIcon';
import KnowledgeBaseIcon from '../../assets/svg/knoledgeBaseIcon';
import * as languageManagerActions from '../../managers/languageManager/actions';
import LeftMenuLink from "./LeftMenuLink";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import './index.scss';
// @ts-ignore
import { A } from 'hookrouter';

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
                <LeftMenuLink
                    href={'/knowledge'}
                    Icon={KnowledgeBaseIcon}
                    text={t('knowledgeBase')}
                />
                <LeftMenuLink
                    href={'/'}
                    Icon={RequestIcon}
                    text={t('requests')}
                />
                <LeftMenuLink
                    href={'/stuff'}
                    Icon={StuffIcon}
                    text={t('stuff')}
                />
                <LeftMenuLink
                    href={'/clients'}
                    Icon={ClientIcon}
                    text={t('clients')}
                />
                <LeftMenuLink
                    href={'/actives'}
                    Icon={ActiveIcon}
                    text={t('actives')}
                />
                <LeftMenuLink
                    href={'/settings'}
                    Icon={SettingIcon}
                    text={t('settings')}
                />
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