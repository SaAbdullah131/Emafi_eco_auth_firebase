import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {
    const [error,setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password  = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate('/');
        })
        .catch (error=> {
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"placeholder='Enter Your Email'required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"placeholder='Enter Your password'required />
                </div>
              <input className='btn-submit' type="submit" value="login" />
            </form>
            <p><small>New to Emafi ? <Link to='/signup'>Create New Account.</Link></small></p>
        </div>
    );
};

export default Login;