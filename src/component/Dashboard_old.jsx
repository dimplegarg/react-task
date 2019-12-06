import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch({ type:"USER_LIST" });
    }

    render() {
        return (
            <div className="col-sm-12 container-fluid mainContainer">
                <nav className="navbar1">
                    <div className="container-fluid" style={{marginTop:"-1px"}}>
                        <div className="logo">Dashboard Page</div>
                        <div className="navbar-header">
                        </div>
                    </div>
                </nav>
                <div className="sidebar">
                    <ul>
                        <li className="active">
                            <label>Link 1</label>
                        </li>
                        <li>
                            <label>Link 2</label>
                        </li>
                        <li>
                            <label>Link 3</label>
                        </li>
                        <li>
                            <label>Link 4</label>
                        </li>
                        <li>
                            <label>Link 5</label>
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    <h1 className="heading">User</h1>
                    {this.props.login && this.props.login.length > 0 &&
                        this.props.login.map(i => {
                            return(
                                <div className="taskContainer" key={i.id}>
                                    <div className="taskDiv">
                                        <label className="smallLbl">Name</label>
                                        <label className="count" style={{color: "skyblue"}}>{i.name}, {`${i.age} yrs`} ({i.gender})</label>
                                        {/* <img src="../assets/images/box.svg" /> */}
                                        <hr />
                                        <label className="smallLbl">Email: {i.email}</label>
                                        <label className="smallLbl">Phone No. : {i.phoneNo}</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.LoginReducer.user
})

export default connect(mapStateToProps)(Dashboard)
