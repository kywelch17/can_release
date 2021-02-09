import React  from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'; 
import { createGlobalStyle } from 'styled-components';

import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';

const GlobalStyle = createGlobalStyle`
    body {
        position:relative;
        min-height:100vh;
        padding-bottom:2.5rem;
        background-color: #E8DDB5
    }
`;

export default function App() {
    
    return (
        <><GlobalStyle/>
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
