import React from 'react';
import { connect } from 'react-redux';
import './login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <div className='login-page'>
            <div className='container'>
                {/*<div className='background'></div>*/}
                <div className='container-helper'>
                    <div className='login-form'>
                        <div className='sign-up'>
                            <button className=' button sign-up-button'>Sign Up</button>
                        </div>
                        <div className='content'>
                            <div className='input-container'>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                <input className='login-input'></input>
                            </div>
                            <div className='input-container'>
                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                <input className='login-input'></input>
                            </div>
                            <button className=' button login-button'>Login</button>
                            <div className='sign-up'>
                                <button className='button forgot-button'>Forgot Password</button>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='footer-container'>
                            <p className='footer__sign-in'>Sign in with</p>
                            <div className='footer-icons'>
                            <FontAwesomeIcon icon={faGoogle} className='footer-icon' size='2x'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faFacebookF} className='footer-icon' size='2x'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className='footer-icon' size='2x'></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(Login);