import React from 'react';
import SideNav from './SideNav';

export default function Dashboard(props) {
    return (
        <div className="container-fluid mainContainer no-gutters row">
            <SideNav />
            <div className="col-10">
                <div className="header">
                    <span> {`< back to add users`} </span>
                    <span>Lets assign providers to location, one at a time</span>
                </div>

                <div className="row searchBar col-12">
                    <div className="col-6">
                        <span>ABC PTY LT</span>
                        <span>Overseas Bronco</span>
                        <span>I Test Street Sydney NSW 2000 - inpatient</span>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                        <button>Proceed to next location</button>
                    </div>
                </div>
            </div>
        </div>
    )
}