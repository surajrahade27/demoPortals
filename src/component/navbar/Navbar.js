import { Avatar, Box, Collapse, Drawer, IconButton, Link, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React,  { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import './navbar.css';
import owner from '../../assets/user-1.jpg';
import { userlogout } from '../../redux/Login/actions';
import jwt_decode from 'jwt-decode';

//BEM -> Block Element Modifier

export const Navbar = () => {
    
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const [active, setNavActive] = useState(false);
    const toggleNavActive = () => setNavActive(!active);

    const [userActive, setUserActive] = useState(false);
    const toggleUserActive = () => setUserActive(!userActive);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState("");

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(userlogout());
        navigate("/sa/login")
    }   

    const handleDashboardClick = () =>{
        navigate("/dashboard")
    }

    // useEffect (() => {
    //     const user = jwt_decode(JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).auth).user)
    //     console.log(user)
    //     if(user)
    //         setUser(user);
    //  },[]);


    return(
        <div className="lms__navbar">
            <nav>
                {/* PaperProps={{sx:{bottom: '0', height: 'auto', overflowX: 'hidden', top: '64px', width: '256px'}}} className="lms_sidebar lms_sidebar-maximize2"*/}
                <Drawer variant="permanent" className={hovered ? 'lms_sidebar lms_sidebar-maximize' : 'lms_sidebar'} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    <div className="lms__navbar-links">
                        <List disablePadding component='div' className="lms__LoggedIn-info">
                            <ListItem disableGutters component='div' className="lms__LoggedIn">
                                <ListItemAvatar className="lms__LoggedIn-avatar">
                                    <Avatar className="lms_LoggedIn-pic" alt="Harvey Specter" src={owner} />
                                </ListItemAvatar>
                                <Box className="lms__LoggedIn-icon-set">
                                    <IconButton className="lms__icon icon-small lms__icon-language" />
                                    <IconButton className="lms__icon icon-small lms__icon-gear" />
                                    <IconButton className="lms__icon icon-small lms__icon-logout" onClick={handleLogout} />
                                </Box>
                            </ListItem>
                            {/*  className="lms__LoggedIn-user lms__nav-link-sub" */}
                            <ListItem disableGutters disablePadding component='div'>
                                <Link href="#" className={userActive ? 'lms__LoggedIn-user lms__LoggedIn-user-active lms__nav-link-sub' : 'lms__LoggedIn-user lms__nav-link-sub'} onClick={toggleUserActive}>
                                    <h5>{user.firstname} {user.lastname}</h5>
                                    <h6>{user.role}</h6>
                                </Link>
                                <div className="lms__user-action-list">
                                    <Link href="#" className="lms__user-action">Profile</Link>
                                    <Link href="#" className="lms__user-action">Change Language</Link>
                                    <Link href="#" className="lms__user-action">Help Center</Link>
                                </div>
                            </ListItem>
                        </List>
                        <List disableGutters disablePadding className="lms___nav-list">
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module" onClick={handleDashboardClick}>
                                    <ListItemIcon className="lms__icon lms__icon-dashboard" />
                                    <ListItemText className="lms__nav-link-title">Dashboard</ListItemText>
                                </MenuItem>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className={active ? 'lms__nav-module lms__nav-module-active' : 'lms__nav-module'} onClick={toggleNavActive}>
                                    <ListItemIcon className="lms__icon lms__icon-learning" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Learning</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">My Learning</Link>
                                                <Link href="#" className="lms__user-action">Training Calendar</Link>
                                                <Link href="#" className="lms__user-action">Certifications</Link>
                                                <Link href="#" className="lms__user-action">CPD Points</Link>
                                                <Link href="#" className="lms__user-action">Transcript</Link>
                                                <Link href="#" className="lms__user-action">Requests</Link>
                                                <Link href="#" className="lms__user-action">Support</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module">
                                    <ListItemIcon className="lms__icon lms__icon-skills" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Skills</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">Competencies</Link>
                                                <Link href="#" className="lms__user-action">Compliances</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module">
                                    <ListItemIcon className="lms__icon lms__icon-knowledge" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Knowledge</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">Announcements</Link>
                                                <Link href="#" className="lms__user-action">Polls</Link>
                                                <Link href="#" className="lms__user-action">Documents</Link>
                                                <Link href="#" className="lms__user-action">FAQs</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module">
                                    <ListItemIcon className="lms__icon lms__icon-team" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Team</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">Calendar</Link>
                                                <Link href="#" className="lms__user-action">Progress</Link>
                                                <Link href="#" className="lms__user-action">Announcements</Link>
                                                <Link href="#" className="lms__user-action">Requests</Link>
                                                <Link href="#" className="lms__user-action">Catalog</Link>
                                                <Link href="#" className="lms__user-action">Support</Link>
                                                <Link href="#" className="lms__user-action">Manager Feedback</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module">
                                    <ListItemIcon className="lms__icon lms__icon-collaboration" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Collaborations</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">Communities</Link>
                                                <Link href="#" className="lms__user-action">Requests</Link>
                                                <Link href="#" className="lms__user-action">Friends</Link>
                                                <Link href="#" className="lms__user-action">Followers</Link>
                                                <Link href="#" className="lms__user-action">Gallery</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module">
                                    <ListItemIcon className="lms__icon lms__icon-gamification" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Gamification</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">Leaderboard</Link>
                                                <Link href="#" className="lms__user-action">Badges</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                            <ListItem disablePadding>
                                <MenuItem disableGutters component="a" className="lms__nav-module">
                                    <ListItemIcon className="lms__icon lms__icon-instructor" />
                                    <ListItemText className="lms__nav-link-title lms__nav-link-sub">Instructor</ListItemText>
                                </MenuItem>
                                <Collapse in="auto">
                                    <List disablePadding component='div'>
                                        <ListItem disableGutters disablePadding component='div'>
                                            <div className="lms__user-action-list">
                                                <Link href="#" className="lms__user-action">Calendar</Link>
                                                <Link href="#" className="lms__user-action">Contents</Link>
                                                <Link href="#" className="lms__user-action">Reports</Link>
                                                <Link href="#" className="lms__user-action">Queries For Me</Link>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </ListItem>
                        </List>
                        <div className="lms__nav-footer">
                            <Box className="lms__footer-icon-set">
                                <IconButton className="lms__icon lms__icon-guide" />
                                <IconButton className="lms__icon lms__icon-moon" />
                                <IconButton className="lms__icon lms__icon-tour" />
                                <IconButton className="lms__icon lms__icon-promotion" />
                            </Box>
                        </div>
                    </div>
                </Drawer>
                <div className="lms__drawer-backdrop"></div>
            </nav>
        </div>
    )
}

//export default Navbar