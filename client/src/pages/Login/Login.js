import React from 'react';
import logo from '../../images/logo.png';
import google from '../../images/google_logo.png';
import facebook from '../../images/facebook_logo.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
      <div className="login">
          <Container className="d-flex flex-column align-items-center">
            <img src={logo} alt="" className="login__logo" />

            <div className="login__container p-5">
                <form className="row g-3">
                    <p className="text-center">Sign in to start your session</p>
                    <div className="col-md-12">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-md-4 d-grid">
                            <button className="btn btn-lg btn-accent">Login</button>
                        </div>
                            <p className="accent__blue">I forgot my Password</p>
                    </div>

                    <p className="text-center">Don’t have account yet? <Link to="/register" className="accent__blue">Create your account</Link></p>

                    <div className="login__divider">
                        <hr />
                        <p>OR</p>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-google"><img src={google} alt="" className="brand-logo" />Log in with Google</button>
                        <button className="btn btn-facebook"><img src={facebook} alt="" className="brand-logo" />Log in with Facebook</button>
                    </div>
                </form>
            </div>
          </Container>
      </div>
    )
}

export default Login
