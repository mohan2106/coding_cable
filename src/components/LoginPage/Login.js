import React,{useState} from 'react';
import classes from './Login.module.css';
import * as axios from "axios";
import {login} from '../../redux/index';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';


function ValidationMessage(props) {
    if (!props.valid) {
      return(
        <div className={classes.error_msg}>
            <p>{props.message}</p>
        </div>
      )
    }
    return null;
  }

const Login = (props) => {
    const [email,setemail] = useState('');
    const [emailValid,setEmailValid] = useState(false);
    const [password,setpassword] = useState('');
    const [passwordValid,setPasswordValid] = useState(false);
    const [formValid,setFormValid] = useState(false);
    const [errorMessage,setErrorMessage] = useState({});

    const validateForm = ()=>{
        setFormValid(emailValid && passwordValid);
    }

    const updateEmail = (data) => {
        let errorMsg = {...errorMessage};
        setemail(data);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setEmailValid(false);
            errorMsg.email = 'Invalid email format';
            setErrorMessage(errorMsg);
        }else{
            setEmailValid(true);
        }
        validateForm();
    }

    
    const updatePassword = (data) => {
        let errorMsg = {...errorMessage};
        setpassword(data);
        if(data.length === 0){
            setPasswordValid(false);
            errorMsg.password = 'Password is required';
        }else if (data.length < 6){
            setPasswordValid(false);
            errorMsg.password = 'Password needs to be 6 characters or more';
        }else{
            setPasswordValid(true);
        }
        setErrorMessage(errorMsg);
        validateForm();
    }

    const LoginUser = (event) =>{
        event.preventDefault();
        console.log('Login User');
        var data = JSON.stringify(
            {
                "emailId":`${email}`,
                "password":`${password}`,
                "loginIPaddress": '255.255.255.255',
            }
        );
        var config = {
            method: 'post',
            url: 'http://localhost:4000/login',
            headers: { 
              'Content-Type': 'application/json',
            },
            data : data
          };
        props.Login(config);
    }

    if (props.userData.isAuthenticated === true) {
        console.log("User is logged in ")
        props.history.push("/blogs");
      }else{
          console.log(props);
      }
    
    return (
        <div className={classes.maincontainer}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <h2>Sign In</h2>
                    <h4>Welcome Back Coder. SignIn and resume your learning.</h4>
                </div>
                <form onSubmit={LoginUser} id='js-form' className={classes.form}>
                    <div className={classes.form_group}>
                        <label className={classes.label} htmlFor='email'>Email</label>
                        < ValidationMessage valid={emailValid} message={errorMessage.email} />
                        <input type='email' id='email' name='email' className={classes.form_field}
                        value={email} onChange={(e) => updateEmail(e.target.value)} placeholder='Enter email'/>
                    </div>
                    <div className={classes.form_group}>
                        <label className={classes.label} htmlFor='password'>Password</label>
                        < ValidationMessage valid={passwordValid} message={errorMessage.password} />
                        <input type='password' id='password' name='password' className={classes.form_field}
                        value={password} onChange={(e) => updatePassword(e.target.value)} placeholder='Password'/>
                    </div>
                    <div className='form-controls'>
                        <button className={classes.btn} type='submit' disabled={!formValid} onClick={LoginUser}>Sign In</button>
                    </div>
                </form>
                <Link to='/signup' style={{textDecoration:"none"}}>
                    <p className={classes.switch_text}>Don't have account? Register now</p>
                </Link>
            </div>
        </div>
    );
}


const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Login : (data) => dispatch(login(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);
