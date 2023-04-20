import React from "react";
import '../../css/main.css'
import '../../css/normalize.css'
const SaDashboardSidebar = () => {
    return (
        <aside className="layout-menu menu-vertical maximize2">
            <div className="menu-bar-column">
                <div className="logged-in">
                    <div className="logged-in-thumb">
                        <a href="#" className="avatar">
                            <img src="../img/temp/user-1.jpg" />
                        </a>
                        <div className="logged-in-quick-links">
                            <a
                                href="#"
                                className="icon-link icon-link-sm icn-gear"
                                title="Profile Settings"
                            ></a>
                            <a
                                href="../sa"
                                className="icon-link icon-link-sm icn-logout"
                                title="Logout"
                            ></a>
                        </div>
                    </div>
                    <div className="logged-in-user">
                        <a href="#" className="logged-in-user-name">
                            <h6>Savannah Trujillo</h6>
                            <p>Administrator</p>
                        </a>
                        <ul>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">Change Password</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="nav-item">
                            <a
                                href="list-portals.jsp"
                                className="nav-link nav-portals-1 active"
                            >
                                <span>Portals</span>
                            </a>
                        </li>
                        <li className="nav-item with-sub">
                            <a href="dashboard.html" className="nav-link nav-report-1">
                                <span>Reports</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Learner Performance</a>
                                </li>
                                <li>
                                    <a href="#">Curriculum Progress</a>
                                </li>
                                <li>
                                    <a href="#">Portal Audit</a>
                                </li>
                                <li>
                                    <a href="#">Event Nominations</a>
                                </li>
                                <li>
                                    <a href="#">Assessment Analysis</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#">All Reports</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link navTeam">
                                <span>Users</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="menu-bar-column-footer">
                    <a href="#" className="icon-link icn-guide" title="Guide"></a>
                </div>
            </div>
        </aside>
    );
};

export default SaDashboardSidebar;
