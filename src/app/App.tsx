import React, {
    FC,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import DrawerMenu from '../components/drawerMenu/drawerMenu';
import RequestPage from "../views/requestsPage";
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
        <RequestPage />
    </Wrapper>
);

export default (App);