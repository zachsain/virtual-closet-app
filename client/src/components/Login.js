import React, {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import '../App.css';


function Login({setUser}){
    const [showLogin, setShowLogin] = useState(true)

    return (

        <div>
        <h1 id='welcome'>Test </h1>
        <div className="login-form">
        {showLogin ? (
          <div>
            <h2>Login:</h2>
            <LoginForm setUser={setUser} />
            <br />
            <div className="signup-btn">
            <button id="signup-btn" className='btn' onClick={() => setShowLogin(false)}>Signup</button>
            </div>
          </div>
        ) : (
          <div>
            <h2>Create a new account:</h2>
            <SignUpForm setUser={setUser} />
            <h3>If you're already signed up log in here:</h3>
            <div className="signup-btn">
            <button id="signup-btn" className='btn' onClick={() => setShowLogin(true)}>Login</button>
            </div>
          </div>
        )}
        </div>
      </div>

    )
}

export default Login