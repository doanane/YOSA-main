import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/Navbar.css';

const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home','About', 'Contact','News','FAQ'].map((text) => (
                    <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box className='navbar'>
            <div className='logo'>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={require('../Assets/yosa.png')} alt="Logo" style={{ height: '40px' }} />
                </Link>
            </div>
            {isSmallScreen ? (
                <>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {drawerContent}
                    </Drawer>
                </>
            ) : (
                <div className='navButtons'>
                    <Button variant='text' size="large" component={Link} to="/" className="navButton">
                        Home
                    </Button>
                    <Button variant='text' size="large" component={Link} to="/about" className="navButton">
                        About
                    </Button>
                    <Button variant='text' size="large" component={Link} to="/contact" className="navButton">
                        Contact
                    </Button>
                    <Button variant='text' size="large" component={Link} to="/news" className="navButton">
                        News
                    </Button>
                    <Button variant='text' size="large" component={Link} to="/faq" className="navButton">
                        FAQ
                    </Button>
                </div>
            )}
        </Box>
    );
};

export default Navbar;
