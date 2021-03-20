/** @format */
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import App from './App';

setConfig({
    logLevel: 'debug',
    trackTailUpdates: false,
});

const HotApp = hot(App);

export default HotApp;
