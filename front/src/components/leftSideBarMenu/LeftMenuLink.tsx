import React, {FC} from 'react';
// @ts-ignore
import { A } from 'hookrouter';


type Props = {
    href: string;
    Icon: FC;
    text: string;
}

const LeftMenuLink: FC<Props> = ({ href, Icon, text }: Props) => (
    <A href={href}>
        <div className='link-item-container'>
            <Icon />
            <span className='link-item-container__link-title'>
                {text}
            </span>
        </div>
    </A>
);

export default LeftMenuLink;