import React from "react";
import './dashboard.css';
import SMDashboardSlice from "../../component/Dashboard/SMDashboardSlice";

/* const Dashboard = () => {
    return(
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard */

export default function Dashboard() {
    return(
        <div>
            
           
            {/* <Dashboard /> */}
            <SMDashboardSlice />
            
        </div>
    )
}