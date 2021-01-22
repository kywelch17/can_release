import React  from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'; 

import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';

export default function App() {
    return (
        <>
            <BrowserRouter useHistory={useHistory}>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
