/** @format */
import React, { lazy, Suspense } from 'react';
import '../assets/styles/index.less';
import classes from './App.less';

const Demo: React.FC<{}> = lazy(() => import('../pages/demo/demo'));

const Loading: React.FC<{}> = () => <div>loading</div>;

const SuspenseDemo: React.FC<{}> = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Demo />
        </Suspense>
    );
};

const App: React.FC<{}> = () => {
    return (
        <div className={classes.app}>
            app
            <SuspenseDemo />
        </div>
    );
};

export default App;
