import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/Home.css"

function Home() {
    return (
        <div className='homeContainer'>

            <div className="backgroundElement" id='BE1'></div>
            <div className="backgroundElement" id='BE2'></div>

            <div className="heading">Welcome to Collectory</div>

            <div className="midContainer">

                <div className="paragraph">Organize, Manage and Showcase Your Collection like never before</div>

                <div className="loginContainer">

                    <h3>Login</h3>
                    <form action="" className='loginForm'>
                        <div className="label-input">
                            <label htmlFor="login-email">Email</label>
                            <input type="text" placeholder='' id='login-email' name='login-email' />
                        </div>

                        <div className="label-input">
                            <label htmlFor="login-pass">Password</label>
                            <input type="password" name="login-pass" id="loginPassword" placeholder='' />
                        </div>
                        <button type="submit" className='loginButton'>Sign in</button>
                    </form>

                    <p>Don't have an account? <Link to='/sign-up' id='link-SignUp'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Home
