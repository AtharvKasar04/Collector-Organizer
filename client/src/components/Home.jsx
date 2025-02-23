import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../assets/styles/Home.css"
import api from '../api/api';

function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await api.post(`/user/login`, { email, password }, { withCredentials: true });

            if (response.status === 200) {
                navigate('/recent-collections');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                alert(err.response.data.message || "An error occured while logging in.");
            }
            else if (err.response && err.response.status === 404) {
                alert(err.response.data.message || "User not found");
                navigate('/sign-up')
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

                    <h3>Login</h3>
                    <form onSubmit={handleFormSubmitLogin} className='loginForm'>
                        <div className="label-input">
                            <label htmlFor="login-email">Email</label>
                            <input type="text" placeholder='' id='login-email' name='login-email' onChange={(e) => { setEmail(e.target.value) }} required='true' autoComplete='off'/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="login-pass">Password</label>
                            <input type="password" name="login-pass" id="login-password" placeholder='' onChange={(e) => { setPassword(e.target.value) }} required='true' autoComplete='off'/>
                        </div>
                        <button type="submit" className='loginButton'>Sign in</button>
                    </form>

                    <p>Don&apos;t have an account? <Link to='/sign-up' id='link-SignUp'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Home
