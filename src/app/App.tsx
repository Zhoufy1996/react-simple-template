/** @format */
import React, { lazy, Suspense } from 'react';
import faker from 'faker';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import '../assets/styles/index.less';
import Header from '../shared/components/header/Header';
import Loading from '../shared/components/loading/Loading';
import styles from './App.less';

faker.locale = 'zh_CN';

const CssRoutes = lazy(() => import('../pages/css/routes'));
const ComponentRoutes = lazy(() => import('../pages/components/routes'));
const Home = lazy(() => import('../pages/home/Home'));

const Main: React.FC<{}> = ({ children }) => {
    return <main className={styles.main}>{children}</main>;
};

const App: React.FC<{}> = () => {
    return (
        <Router>
            <Header />
            <Main>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/css" component={CssRoutes} />
                        <Route path="/component" component={ComponentRoutes} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Suspense>
            </Main>
        </Router>
    );
};

export default App;
