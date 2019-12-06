import React, { Component } from 'react';
import { handleApiLogin, defaultLogin } from "../action/LoginAction";
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.defaultLogin();
    }

    componentWillReceiveProps = (newProps) => {
        console.log('new login', newProps)
        if(newProps.login && newProps.login.loginSuccess) {
            this.props.history.push('/dashboard');
        } else if(newProps.login && newProps.login.loginError) {
            this.setState({ email:"", pwd:"" })
            alert(`Login Error: ${newProps.login.loginError}`)
        }
    }

    handleInput = e => {
        console.log(e.target.id);
        this.setState({ [e.target.id]: e.target.value });
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.handleApiLogin({ email:this.state.email, pwd:this.state.pwd })
    }

    render() {
        return (
            <div className="col-sm-12 container-fluid mainContainer">
                <div className="col-sm-12 formContent">
                    <div className="formContainer">
                        <h1>Sign in</h1>
                        <h3>Enter your details below.</h3>
                        <form onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">USERNAME</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter user name" value={this.state.email} onChange={this.handleInput} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">PASSWORD</label> 
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" value={this.state.pwd} onChange={this.handleInput} required />
                            </div>
                            <div className="buttonContainer"><button type="submit" className="btn btn-danger">SIGN IN</button></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const loginDetail = state => {
    console.log('login', state);
    return state.LoginReducer;
}

const mapStateToProps = state => ({
    login: loginDetail(state)
})


export default connect(mapStateToProps, {handleApiLogin, defaultLogin})(Login)