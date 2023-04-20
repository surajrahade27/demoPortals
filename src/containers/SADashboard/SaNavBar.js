import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../../css/main.css'
import '../../css/normalize.css'
import useravatar from '../../img/temp/user-1.jpg';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import jwt_decode from 'jwt-decode';
import { userlogout } from '../../redux/Login/actions';

export default function SANavBar() {
    const [user, setUser] = useState("");
    const [hover, setHover] = useState(false);
    const [shortname, setShortname] = useState();

    const [userActive, setUserActive] = useState(false);
    const toggleUserActive = () => setUserActive(!userActive);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleHover = () => {
        setHover(!hover)
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userlogout());
        navigate("/sa/login")
    }

    useEffect(() => {
        const user = jwt_decode(JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).auth).user)
        console.log(user)
        if (user) {
            setUser(user);
            let shortName;
            if (user.firstname && user.lastname) {
                shortName = user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase();
            }
            setShortname(shortName);
        }
    }, []);

    return (
        <aside
            className={"layout-menu menu-vertical" + (hover ? " maximize" : " maximize2")}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover} >
            <div className="menu-bar-column">
                <div className="logged-in">
                    <div className="logged-in-thumb">
                        {/* <a href="#" className="avatar"><img src={useravatar} /></a> */}
                        <aside className="avatar"><Avatar sx={{ bgcolor: deepOrange[500] }}>{shortname}</Avatar></aside>
                        <div class="logged-in-quick-links">
                            {/* <!-- <a href="#" class="icon-link icn-view-mode-moon" title="Switch To Dark Mode"></a> --> */}
                            <button type="button" class="btn btn-sm btn-icon-label btn-no-border hasTooltip"><div class="tooltip">Dark Mode</div><div class="icon-link icon-link-sm icn-view-mode-moon"></div></button>
                            <button type="button" class="btn btn-sm btn-icon-label btn-no-border hasTooltip"><div class="tooltip">Setting</div><div class="icon-link icon-link-sm icn-gear"></div></button>
                            <button type="button" class="btn btn-sm btn-icon-label btn-no-border hasTooltip" onClick={handleLogout}><div class="tooltip">Logout</div><div class="icon-link icon-link-sm icn-logout"></div></button>
                        </div>
                    </div>
                    <div className="logged-in-user">
                        <a href="#" className={userActive ? "logged-in-user-name active" : "logged-in-user-name"} onClick={toggleUserActive}>
                            <h6>{user.firstname} {user.lastname}</h6>
                            <p>{user.role ? "Super Admin" : ""}</p>
                        </a>
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Change Password</a></li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="nav-item">
                            <a href="dashboard.html" className="nav-link nav-portals-1 active"><span>Portals</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link nav-report-1"><span>Reports</span></a>
                            {/* <ul>
                                <li><a href="#">All Reports</a></li>
                                <li><a href="#">Learner Performance</a></li>
                                <li><a href="#">Event Nominations</a></li>
                                <li><a href="#">Learner Performance</a></li>
                                <li><a href="#">Learner Performance</a></li>
                                <li><a href="#">Learner Performance</a></li>
                            </ul> */}
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link navTeam"><span>Users</span></a>
                        </li>

                    </ul>
                </nav>
                <div className="menu-bar-column-footer">
                    <a href="#" className="icon-link icn-guide" title="Guide"></a>
                    <a href="#" className="icon-link icn-view-mode-moon" title="Switch To Dark Mode"></a>
                    <a href="#" className="icon-link icn-tour" title="Tour"></a>
                    <a href="#" className="icon-link icn-promotion" title="Promotion"></a>
                </div>
            </div>
        </aside>
    )
}