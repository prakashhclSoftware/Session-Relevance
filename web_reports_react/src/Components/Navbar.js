import React from "react";
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
  InputBase,
  MenuItem,
  MenuList,
  Divider,
  List,
} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        sx={{ backgroundColor: "white", color: "black" }}
        open={open}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={toggleDrawer}
          >
            <MenuIcon color="primary" />
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
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Home</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PriorityHighIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Report</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Explore
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Administration
            </Typography>
          </MenuItem>
        </MenuList>

        <List component="nav">
          {/* {mainListItems} */}
          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
