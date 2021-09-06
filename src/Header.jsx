import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/netflix-logo-1.png';

export const Header = () => {
    
        return (     
       <>
      <div className="navbar">
      <span className="netflix">
      <img src={logo}></img>
      </span>
       <div className="btn-1">
       <span className="btn">
       <select name="cars" id="cars">
       <option value="eng">English</option>
       <option value="hindi">Hindi</option>
       </select>
       </span>
       </div>
       <div className="btn-2">
       <Link className="sign"  exact to ="/sign">Sign in</Link>
       </div>
       </div>


       <div className="header">
       <div className="main-header">
       <span className="intro">Unlimited Movies , <br/>TV shows
        and more.</span>
        <span className="main-intro"> Watch anywhere cancel anytime 
        </span>
        <span className="main-intros"> Ready to watch ?  enter your email <br/>to create or restart your  membership .
        </span>
       </div>
       </div>
       </>
    )
}
