import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homeContainer'>
      <div className="heading">Welcome to Collectory</div>

      <div className="paragraph">Organize, Manage and Showcase Your Collection like never before</div>

      <form action="" className='loginForm'>
        <input type="text" placeholder='email' id='loginEmail'/>
        <input type="password" name="" id="loginPassword" placeholder='password'/>
        <button type="submit" className='loginButton'>Sign in</button>
      </form>

      <p>Don't have an account? link <Link id='link-SignUp'>Sign up</Link> </p>
    </div>
  )
}

export default Home
