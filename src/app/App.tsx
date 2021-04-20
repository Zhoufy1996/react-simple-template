/** @format */
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import faker from 'faker';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import '../assets/styles/index.less';
import customTheme from '../core/theme';
import Header from '../shared/components/header/Header';
import Loading from '../shared/components/loading/Loading';

faker.locale = 'zh_CN';

const CssRoutes = lazy(() => import('../pages/css/routes'));
const ComponentRoutes = lazy(() => import('../pages/components/routes'));
const Home = lazy(() => import('../pages/home/Home'));

const theme = createMuiTheme(customTheme);

const useStyles = makeStyles(() => {
    return {
        root: {
            paddingTop: 96,
        },
    };
});

const Main: React.FC<{}> = ({ children }) => {
    const classes = useStyles();
    return <main className={classes.root}>{children}</main>;
};

const App: React.FC<{}> = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
        </ThemeProvider>
    );
};

export default App;
