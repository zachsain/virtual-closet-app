import React, {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import '../App.css';


function Login({setUser}){
    const [showLogin, setShowLogin] = useState(true)

    return (

        <div>
        <h1 className="pages-header"> Welcome</h1>
        <h3 className="new-account-header"> to your new closet</h3>
        <div className="login-form">
        {showLogin ? (
          <div>
            <LoginForm setUser={setUser} />
            <br />
            <div className="signup-container">
              <h3 className="new-account-header">Or...</h3>
            <button id="signup-btn" className='btn' onClick={() => setShowLogin(false)}>Signup</button>
            </div>
          </div>
        ) : (
          <div>
            <SignUpForm setUser={setUser} />
            <br />
            <div className="signup-container">
            <h3 className="new-account-header">Or...</h3>
            <button id="signup-btn" className='btn' onClick={() => setShowLogin(true)}>Login</button>
            </div>
          </div>
        )}
        </div>
      </div>

    )
}

export default Login