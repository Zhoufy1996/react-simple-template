import React, { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const SiderbarDemo = lazy(() => import('./SiderbarDemo'));

const ComponentRoutes = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}/list`} component={SiderbarDemo} />
        </Switch>
    );
};

export default ComponentRoutes;
