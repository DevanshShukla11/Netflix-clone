import React from 'react'
import 'boxicons';
import FacebookIcon from '@material-ui/icons/Facebook';

export const Mid = () => {
    return (
       <>
       <div className="header">
       <div className="main-header">
       <div className="sign-form">
       <span className="sign-1">Sign in</span>
       <div className="pswd">
       <input  type="email" placeholder="Email or phone number"></input>
       <input  type="password" placeholder="Email your Password "></input>
       <button onClick={()=>{alert('submitted succesfully...') }} className="btn-4">Sign in </button>
       <div className="label">
       <input className="check" type="checkbox"></input><label className="me">remember me&emsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;need help?</label>
       </div>
       <FacebookIcon className="fb" />
       <span className="login">Login with Facebook</span>
       <br/>
       <br/>
       <span className="logins">New to netflix ?   &nbsp;       sign up now....</span>
       </div>
       </div>
       </div>
       </div>
       </>
    )
}
