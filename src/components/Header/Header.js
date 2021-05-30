import React from 'react';
import '../../css/header.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      background: '#8B5D41'
    },
    button: {
        color: "white",
        fontSize: "20px",
        textDecoration: "none"
    },
    menu: {
        color: '#8B5D41'
    }
}));


const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <div className="name">
                        <h1>Whitney Smith</h1>
                    </div>
                    <div className="nav">
                        <Button className={classes.button}>
                            <Link className={classes.button} to="/">About</Link>
                        </Button>
                        <Button className={classes.button}>
                            <Link className={classes.button} to="/projects">Projects</Link>
                        </Button>
                        {/* <div>
                            <Link to="/media">Media</Link>
                        </div> */}
                        <Button className={classes.button}>
                            <a className={classes.button} href="https://github.com/PlinytheYounger/whitney-portfolio">
                                Source Code & Resume
                            </a>
                        </Button>
                    </div>
                    {/* <IconButton edge="end" className={classes.menuButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                        <Menu id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.menu}
                            >
                            <MenuItem onClick={handleClose}>
                                <Link className={classes.menu} to="/">About</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link className={classes.menu} to="/projects">Projects</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <a className={classes.menu} href="https://github.com/PlinytheYounger/whitney-portfolio">
                                    Source Code & Resume
                                </a>
                            </MenuItem>
                        </Menu> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;