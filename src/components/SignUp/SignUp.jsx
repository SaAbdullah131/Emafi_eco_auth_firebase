import React, { useState } from 'react';
import './SignUp.css';
import { Link, useSubmit } from 'react-router-dom';
const SignUp = () => {
    const [error,setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        const form  = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email,password,confirmPassword);

        // validation 
        if(password != confirmPassword) {
            setError('Your Password does not  match');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        
        form.reset();
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter Your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirm-password" placeholder='Confirm Password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='text-error'>{error}</p>
            <p><small>Already Have an Account ? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default SignUp;