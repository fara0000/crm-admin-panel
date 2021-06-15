import React, { FC } from 'React';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from "../../app/App";

export const Routers: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            {/*<Route exact path='/posts' component={PostPage}/>*/}
            {/*<Route path={'/posts'} >*/}
            {/*    <Switch>*/}
            {/*        <Route exact path="/" component={PostPage}/>*/}
            {/*        <Route path="/test">*/}
            {/*            Опа, а вот и крыса попалась.*/}
            {/*        </Route>*/}
            {/*    </Switch>*/}
            {/*</Route>*/}
        </Switch>
    </BrowserRouter>
)

export default Routers;