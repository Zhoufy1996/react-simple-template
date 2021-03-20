/** @format */
import React, { lazy, Suspense } from 'react';
import '../assets/styles/index.less';
import classes from './App.less';

const Demo = lazy(() => import('../pages/demo/demo'));

const Loading = () => <div>loading</div>;

const SuspenseDemo = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Demo />
        </Suspense>
    );
};

const App = () => {
    return (
        <div className={classes.app}>
            app
            <SuspenseDemo />
        </div>
    );
};

export default App;
