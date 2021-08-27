import React, {useState} from 'react';
import logo from '../../images/logo.png';
import './Register.css';
import { Container } from 'react-bootstrap';
import Axios from 'axios';


const Register = () => {
    const [usernameReg, setUsernameReg]=useState('');
    const [passwordReg, setPasswordReg]=useState('');
   // const [username, setUsername]=useState('');
   // const [password, setPassword]=useSate('');

    Axios.defaults.withCredentials=true;




   const register=()=>{
        Axios.post('http://localhost:3001/register', 
        {
            username: usernameReg,
            password: passwordReg
        })
        .then(
            response=>{
                console.log(response);
            }
        )
        
    }

    return (
        <div className="register">
          <Container className="d-flex flex-column align-items-center">
            <img src={logo} alt="" className="register__logo" />

            <div className="register__container p-5">
                <form className="row g-3">
                    <p className="text-center">Giving importance to your health and medical needs.</p>
                    <div className="col-md-12">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control"  />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control"  onChange={e=>{setUsernameReg(e.target.value)}}/>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={e=>{setPasswordReg(e.target.value)}} />
                    </div>

                    <p>By submitting, you agree to the <span className="accent__blue">User Agreement</span>, 
                    <span className="accent__blue">Privacy Policy</span> and <span className="accent__blue">Cookie Policy</span> of Medical Hub PH</p>

                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-accent" onClick={register}>Register</button>
                    </div>
                </form>
            </div>
          </Container>
      </div>
    )
}

export default Register
