import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from "../../app/App";

export const Routers: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
    </BrowserRouter>
)

export default Routers;