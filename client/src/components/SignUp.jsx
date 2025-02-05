import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../assets/styles/Home.css"
import api from '../api/api';

function Home() {

    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmitSignUp = async (e) => {
        e.preventDefault();

        try {
            let response = await api.post(`/user/register`, { username, name, email, password }, { withCredentials: true });

            if (response.status === 201) {
                alert("User registered Successfully You can Login now :)");
                navigate('/');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                alert(err.response.data.message || "User already registerd");
            }
            else {
                alert(`Error: ${err.message}`);
            }
        }
    }


    return (
        <div className='homeContainer'>

            <div className="backgroundElement" id='BE1'></div>
            <div className="backgroundElement" id='BE2'></div>

            <div className="heading">Welcome to Collectory</div>

            <div className="midContainer">

                <div className="paragraph">Organize, Manage and Showcase Your Collection like never before</div>

                <div className="loginContainer">

                    <h3>Sign Up</h3>
                    <form onSubmit={handleFormSubmitSignUp} className='loginForm'>
                        <div className="label-input">
                            <label htmlFor="login-username">Username</label>
                            <input type="text" placeholder='' id='login-username' name='login-username' required='true' autoComplete='off' onChange={(e) => { setUsername(e.target.value) }}/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="login-name">Name</label>
                            <input type="text" placeholder='' id='login-name' name='login-name' required='true' autoComplete='off' onChange={(e) => { setname(e.target.value) }}/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="login-email">Email</label>
                            <input type="text" placeholder='' id='login-email' name='login-email' required='true' autoComplete='off' onChange={(e) => { setEmail(e.target.value) }}/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="login-pass">Password</label>
                            <input type="password" name="login-pass" id="login-password" placeholder='' required='true' autoComplete='off' onChange={(e) => { setPassword(e.target.value) }}/>
                        </div>
                        <button type="submit" className='loginButton'>Sign up</button>
                    </form>

                    <p>Already have an account? <Link to='/' id='link-SignUp'>Log in</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Home
