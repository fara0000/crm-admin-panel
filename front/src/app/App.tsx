import React, {
    FC,
} from 'react';
import {
    Wrapper,
} from './styledComponent';
import LeftSideBarMenu from '../components/leftSideBarMenu/leftSideBarMenu';
import Router from "../router";
// @ts-ignore
import { useRoutes } from "hookrouter";

const App: FC = () => {
    const routeResult = useRoutes(Router);

    return (
        <Wrapper>
            <LeftSideBarMenu/>
            {routeResult}
        </Wrapper>
    );
}
export default (App);