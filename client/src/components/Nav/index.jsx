import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState(false);
  const deleteStorage = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId');
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  if(localStorage.getItem("loggedIn") === 'true'){
    return (
      <div className={classes.root}>
        <AppBar color="transparent" position="static" >
          <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
              TravelApp
            </Typography>
            
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={handleMenu}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-bar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem>
              <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
              <Link to="/dashboard">Dashboard</Link>
              </MenuItem>
              <MenuItem>
              <Link onClick={deleteStorage} to="/">Logout</Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    ); 
  }
  else  {
    return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static" >
        <Toolbar>
        
        <Typography className={classes.title} variant="h6" noWrap>
            TravelApp
          </Typography>
          
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleMenu}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-bar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>
            <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
            <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
            <Link to="/loginpage">Login</Link>
            </MenuItem>
            <MenuItem>
            <Link to="/signup">Sign Up</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
};

export default SearchAppBar;