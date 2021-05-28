import React, {
    FC,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import DrawerMenu from '../components/drawerMenu/drawerMenu';
// import Routers from '../modules/router';

// interface Props {
//     t: any;
// }

const App: FC = () => (
    <Wrapper>
        {/*<Routers />*/}
        <DrawerMenu
            // t={t}
        />

    </Wrapper>
);

export default (App);