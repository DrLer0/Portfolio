import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { HashRouter, Route, Link } from "react-router-dom";
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Projects from '../views/Projects'; 
import About from '../views/About'; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  img: {
      height: 350,
  },
  center: {
      textAlign: "center",
  },
  spacing: {
      padding: theme.spacing(2),
  },
  color: {
    color: "white"
  }
}));

export default function Sidebar(props) {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <HashRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <ThemeProvider theme={theme}>
          <Typography variant="h4"  className={classes.spacing}>
            Jonathan Doctolero
          </Typography>
          <Divider orientation="vertical" flexItem/>
          <Typography variant="h5"  className={classes.spacing}>
            <Link to="/" className={classes.color}>Projects</Link>
          </Typography>
          <Divider orientation="vertical" flexItem/>
          <Typography variant="h5"  className={classes.spacing}>
            <Link to="/about" className={classes.color}>About Me</Link>
          </Typography>
          <Divider orientation="vertical" flexItem/>
        </ThemeProvider>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <img alt="Jonathan Doctolero" src={require("../images/headshot.jpg")} className={classes.img} />
        <Divider />
        <List>
            <ListItem button key={"linkedin"}>
                <ListItemIcon><LinkedInIcon /></ListItemIcon>
                <ListItemText primary={<a href="https://www.linkedin.com/in/jonathan-doctolero/">LinkedIn</a>} />
            </ListItem>
            <ListItem button key={"github"}>
                <ListItemIcon><GitHubIcon /></ListItemIcon>
                <ListItemText primary={<a href="https://github.com/DrLer0">Github</a>} />
            </ListItem>
            <ListItem button key={"resume"}>
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <ListItemText primary={<a href="https://docs.google.com/document/d/1xcXsnV5Nxpny6FcmEJn0XsyXf4rdK7Tsj9PiHk3xuDY/edit?usp=sharing">Resume</a>} />
            </ListItem>
        </List>
        <Divider />
        <h4 className={classes.center}>joanthan.doctolero7@gmail.com<br/>(408)644-6865</h4>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
    </HashRouter>
  );
}