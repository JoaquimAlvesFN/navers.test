import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import {store} from './reducer/index';

import Login from './pages/Login';
import Home from './pages/Home';
import Show from './pages/Show';
import Create from './pages/Create';
import Edit from './pages/Edit';

const PrivateRoute: React.FC = ({children, ...rest}): any => {
    return (
        <Route
            {...rest}
            render={({location}) => localStorage.getItem('token') ? 
                ( children ) : 
                ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
            }
        />
    );
}

function Routes() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <PrivateRoute>
                        <Route path="/listNavers" component={Home} />
                        <Route path="/showNaver/:id" component={Show} />
                        <Route path="/createNavers" component={Create} />
                        <Route path="/editNaver/:id" component={Edit} />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
}

export default Routes;