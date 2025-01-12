import { useContext, useEffect, useState } from "react";
import classes from "./Dashboard.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import userplaceholder from "../../assets/userplaceholder.png";
import LOGO from "../../assets/head_logo.svg";
import LogoBg from "../../assets/LogoBg.png";
import HotelStatus from "../Hotel Status/HotelStatus";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = (props) => {
  const [open, setOpen] = useState(true);
  const [menuOption, setMenuOption] = useState(0);
  const [isLoading, setIsLoading] = useState(false); 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    {isLoading ? 
    <div className={classes.loadingScreen}>
    <h1 >Loading...</h1>
    {/* Add any loading animation or content here */}
  </div>
  :
  <Box sx={{ display: "flex" }}>
  {/* <CssBaseline /> */}
  <AppBar position="fixed" open={open} style={{boxShadow:'none',}}>
    <Toolbar className={classes.cssssss}>
    <Navbar>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontSize:"12px"}}>
            <Nav.Link onClick={()=>setMenuOption(1)} style={{color:menuOption === 1 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(2)} style={{color:menuOption === 2 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#dynamic-dashboard">Dynamic Dashboard</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(3)} style={{color:menuOption === 3 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#hotelstatus">Hotel Status</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(4)} style={{color:menuOption === 4 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#manage">Manage</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(5)} style={{color:menuOption === 5 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#files">Files</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(6)} style={{color:menuOption === 6 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#reception">Reception</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(7)} style={{color:menuOption === 7 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#sales">Sales</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(8)} style={{color:menuOption === 8 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#city-ledger">City Ledger</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(9)} style={{color:menuOption === 9 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#rate">Rate</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(10)} style={{color:menuOption === 10 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#reports">Reports</Nav.Link>
            <Nav.Link onClick={()=>setMenuOption(11)} style={{color:menuOption === 11 ? 'rgba(61, 151, 210, 1)' : '#111',textWrap:"nowrap"}} href="#accounting">Accounting</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div style={{width:'fit-content',margin:'auto 1em auto auto',display:"flex",flexDirection:"row"}}>
        <p style={{fontSize:'12px',margin:"auto 1em",textAlign:"end",fontFamily:"var(--font-family)",color:'rgba(154, 171, 210, 1)',textWrap:"nowrap"}}> Hello <br/><span style={{color:"#111",fontWeight:'600'}}>Ahmad Abou Saleh</span> <br/>  <span style={{fontWeight:'700'}}>Hotel: Elite</span></p>
        <><img src={userplaceholder} alt="" style={{width:"3em",height:'3em',borderRadius:"2px",objectFit:"cover",margin:'auto 0'}} /></>
      </div>
    </Toolbar>
  </AppBar>
  <Drawer variant="permanent" open={open}>
    <DrawerHeader className={classes.sidebartop}>
        <img src={LogoBg} alt="" className={classes.logoBg}/>
      
        <img src={LOGO} alt="" className={classes.logooo} />
    </DrawerHeader>
    <List className={classes.sidebartop1}>
        <div className={classes.card}>
            <h2>Working Date</h2>
            <p style={{fontSize:'12px', textAlign:"center",margin:"auto"}}>{new Date().getDate()}-{new Date().getMonth()  + 1}-{new Date().getFullYear()}</p>
        </div>
        <div className={classes.card}>
            <div className={classes.cardRow}>
                <h3>- Rooms in Hotel</h3>
                <p>78</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Nbr. Of Beds</h3>
                <p>111</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Available Rooms</h3>
                <p>65</p>
            </div>
        </div>
        <div className={classes.card}>
            <div className={classes.cardRow}>
                <h3>- Arrival</h3>
                <p>4</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Departure</h3>
                <p>3</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Occupied</h3>
                <p>15</p>
            </div>
        </div>
        <div className={classes.card}>
            <div className={classes.cardRow}>
                <h3>- Now Empty Rooms</h3>
                <p>63.00</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Avg/ Rate USD</h3>
                <p>80.04</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Avg/ Rate LBP</h3>
                <p>7,163,867.96</p>
            </div>
        </div>
        <div className={classes.card}>
            <div className={classes.cardRow}>
                <h3>- Occ Actual</h3>
                <p>22.00 %</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Occ w/Tentative</h3>
                <p>24.00 %</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Avg Occ w/ Rm</h3>
                <p>1.67</p>
            </div>
        </div>
        <div className={classes.card}>
            <div className={classes.cardRow}>
                <h3>- VIP</h3>
                <p>0</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Male</h3>
                <p>11</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Female</h3>
                <p>14</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- Child</h3>
                <p>0</p>
            </div>
        </div>
        <div className={classes.card}>
            <div className={classes.cardRow}>
                <h3>- BB</h3>
                <p>7</p>
            </div>
            <div className={classes.cardRow}>
                <h3>-BO</h3>
                <p>B</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- FB</h3>
                <p>0</p>
            </div>
            <div className={classes.cardRow}>
                <h3>- HB</h3>
                <p>0</p>
            </div>
        </div>
    </List>
  </Drawer>

  <>
  {menuOption !== 3  && (
    <div className={classes.test}>
      <img src={LOGO} alt="Colored Logo" width="500" />
    </div>
)}
     {menuOption === 3 && <HotelStatus />}
  </>
</Box>
  }
    </>
  );
};
export default Dashboard;
