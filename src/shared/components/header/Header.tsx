import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

// const useStyles = makeStyles((theme: Theme) => {});

const Header: React.FC<{}> = () => {
    return (
        <AppBar>
            <Toolbar>
                <NavLink to="component">组件</NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
