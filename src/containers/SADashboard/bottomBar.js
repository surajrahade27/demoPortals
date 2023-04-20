import React from 'react';

function SaBottomBar() {
  return (
    <div className="bottom-bar">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <a href="#" className="bottom-bar-link icn-portals-1">
              <span>Portals</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" className="bottom-bar-link icn-report-1">
              <span>Reports</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" className="bottom-bar-link icn-user-1">
              <span>Users</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" className="bottom-bar-link icn-menu-2">
              <span>More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaBottomBar;
