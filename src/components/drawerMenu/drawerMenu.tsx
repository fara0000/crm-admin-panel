import React, { FC } from 'react';
import LogoIcon from '../../assets/svg/logoIcon';
import StuffIcon from '../../assets/svg/stuffIcon';
import ClientIcon from '../../assets/svg/clientIcon';
import ActiveIcon from '../../assets/svg/activeIcon';
import SettingIcon from '../../assets/svg/settingIcon';
import RequestIcon from '../../assets/svg/requestIcon';
import KnowledgeBaseIcon from '../../assets/svg/knoledgeBaseIcon';
import './drawerMenu.scss';

// interface Props {
//     t: any;
// }

export const DrawerMenu: FC = () => {
    return (
        <div className='drawer-menu-wrapper'>
            <div className='drawer-menu__logo-container'>
                <LogoIcon />
            </div>
            <div className='drawer-menu__link-item-container'>
                <div className='link-item-container'>
                    <KnowledgeBaseIcon />
                    <span className='link-item-container__link-title'>
                        {'База знаний'}
                    </span>
                </div>
                <div className='link-item-container'>
                    <RequestIcon />
                    <span className='link-item-container__link-title'>
                        {'Заявки'}
                    </span>
                </div>
                <div className='link-item-container'>
                    <StuffIcon />
                    <span className='link-item-container__link-title'>
                        {'Сотрудники'}
                    </span>
                </div>
                <div className='link-item-container'>
                    <ClientIcon />
                    <span className='link-item-container__link-title'>
                        {'Клиенты'}
                    </span>
                </div>
                <div className='link-item-container'>
                    <ActiveIcon />
                    <span className='link-item-container__link-title'>
                        {'Активы'}
                    </span>
                </div>
                <div className='link-item-container'>
                    <SettingIcon />
                    <span className='link-item-container__link-title'>
                        {'Настройки'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DrawerMenu;