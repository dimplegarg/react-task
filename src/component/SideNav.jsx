import React from 'react';
import { Link } from 'react-router-dom';


export default function SideNav(props) {
    return (
        <div className="col-2 sideNav">
            <div className="userDetails">
                <span>John Applessed</span>
                <span className="signOut">Sign out</span>
            </div>

            <div className="menuList">
                <span>PROGRESS</span>
                <Link className="sideNavLink" style={{ paddingTop: 0 }} to="#">Practice</Link>
                <Link className="sideNavLink" to="#">Payment</Link>
                <Link className="sideNavLink" to="#">Contract</Link>
                <Link className="sideNavLink" to="#">Details</Link>
                {/* <div style={{ display: "inline-block" }}>
                    <span style={{ width: "10px", height: "10px", border: "1px solid", borderRadius: 50 }}></span> */}
                <Link className="sideNavLink" to="#">Assign providers to</Link>
                {/* </div> */}
                <Link className="sideNavLink" to="#">Practice</Link>
                <Link className="sideNavLink" to="#">Practice</Link>
            </div>
        </div>
    )
}