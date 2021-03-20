import React from 'react';
import ReactDom from 'react-dom';
import HotApp from './app/App.hot';

declare const module: any;

const render = () => {
    ReactDom.render(<HotApp />, document.getElementById('root'));
};

render();

if (module.hot) {
    module.hot.accept('./app/App.hot', () => {
        // eslint-disable-next-line no-console
    });
}
