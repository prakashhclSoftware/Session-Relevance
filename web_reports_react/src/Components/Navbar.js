import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';

import {

 

  InputBase,
  MenuItem,
  MenuList,
 
 
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListItemIcon from '@mui/material/ListItemIcon';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { ACTIONS } from '../App'
import Feed from './Feed'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderWidth: "1px",
    borderColor: "black",
    "&:hover": {},
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "35px",
      display: "block",
      marginTop: "3px",
    },
  }));
  
  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "whitesmoke",
    width: "75%",
    borderRadius: "5px",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      marginLeft: "40px",
      marginRight: "0px",
    },
  }));
  
  const IconWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "-2%",
    },
  }));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Navbar(props) {
  const [open, setOpen] = React.useState(true);
  console.log(props)
  const { dispatch } = props
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const updateData = () => {
    dispatch({ type: ACTIONS.SET_BAR_CHART_DATA, payload: [1,1,1,1,1] })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ backgroundColor: "white", color: "black" }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbeEN4B0iSOBCwfWXOMnNlVeWbFVPO94SfZWbCwZbow&s"
            alt="Bigfix logo"
            height={30}
          />
          <Typography
            variant="p"
            noWrap
            component="div"
            color="primary"
            fontSize="20px"
            fontWeight={600}
            ml={1.5}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BigFix Reports
          </Typography>
      
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchBar>
              <InputBase placeholder="Search" />
            </SearchBar>
          </Search>
          <IconWrapper>
            <NotificationsNoneOutlinedIcon />
            <AccountCircleOutlinedIcon />
          </IconWrapper>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        <MenuList>
          <MenuItem>
            <ListItemIcon sx={{ pl :1 }}>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <Typography variant="inherit" sx={{ pl :1 }} noWrap>Home</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon sx={{ pl :1 }}>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <Typography variant="inherit" sx={{ pl :1 }} noWrap>Report</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon sx={{ pl :1 }}>
              <ExploreOutlinedIcon  />
            </ListItemIcon>
            <Typography variant="inherit" sx={{ pl :1 }} noWrap>Explore</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon sx={{ pl :1 }}>
              <SettingsOutlinedIcon  />
            </ListItemIcon>
            <Typography variant="inherit" sx={{ pl :1 }} noWrap>Administration</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon sx={{ pl :1 }}>
              <DarkModeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" sx={{ pl :1 }} noWrap>Dark Mode</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon sx={{ pl :1 }}>
              <ChatOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" sx={{ pl :1 }} noWrap>Just Ask</Typography>
            <Typography variant="inherit" onClick={updateData} sx={{ pl :1 }} noWrap>updateData</Typography>
          </MenuItem>
        </MenuList>

        <List component="nav">
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer> 
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Feed />
           
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
