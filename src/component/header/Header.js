import React from "react";
import './header.css';
import logo from '../../assets/walmart-logo.png'
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";


var style ={
    backgroundColor: "#000"
}
export const Header = () => {

    return(
        <div className="lms__header">
            <AppBar elevation={0} style={style}>
                <Toolbar >
                    <Box display='flex' flexGrow={1}>
                        <Link href="#" className="lms__logo">
                            <img src={logo} alt="LMS" />
                        </Link>
                    </Box>
                    <Box className="lms__header-icon-set">
                        <IconButton className="lms__icon lms__icon-cart">
                            <span className="lms__badge-count">5</span>
                        </IconButton>
                        <IconButton className="lms__icon lms__icon-search" />
                        <IconButton className="lms__icon lms__icon-bell">
                            <span className="lms__dot-update"></span>
                        </IconButton>
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

//export default Header;