import { ThemeOptions } from '@material-ui/core';
import { amber, blue, cyan, deepOrange, red, green } from '@material-ui/core/colors';

const customTheme: ThemeOptions = {
    palette: {
        primary: {
            main: cyan[500],
        },
        secondary: {
            main: amber[500],
        },
        error: {
            main: red[500],
        },
        warning: {
            main: deepOrange[500],
        },
        info: {
            main: blue[500],
        },
        success: {
            main: green[500],
        },
    },

    transitions: {
        // 运动速率曲线
        easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },
};

export default customTheme;
