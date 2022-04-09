import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton
} from '@mui/material';

const MenuListItem = ({ name }) => {
    console.log(name);
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
        </Typography>
    )
};

const Header = ({ menuList }) => {
    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                {menuList.map(({ name }) => (
                    <MenuListItem name={name} />
                ))}
            </Toolbar>
        </AppBar>
    </Box>);
};

export default Header;