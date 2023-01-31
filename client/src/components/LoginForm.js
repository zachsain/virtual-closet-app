import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAdded } from "../redux/userSlice";
import DisplayErrors from './DisplayErrors';
import '../App.css';


function LoginForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch()

    function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            history.push('/instructions')
            r.json().then((user) => {
                dispatch(userAdded(user))
                setUser(user)
            })
          } else {
            r.json().then((err) => setErrors(err.errors), setShowErrors(true));
          }
        });

    }

return (
  <div>
    <div className="form-container">
    <form  className="forms" onSubmit={handleLogin}>
          <label className='form-label'></label>
          <input
            className="form-inputs"
            type='text'
            id="username"
            autoComplete="off"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input><br />
        <label className='form-label'></label>
          <input
            className="form-inputs"
            type='password'
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input><br />
          {showErrors ? (<div><DisplayErrors error={errors} /></div>) : (null)}  
          <div className="login-btn">
          <button className="btn" type='submit'>Login
          </button>
          </div>
        </form>
    </div>
  </div>
 
)
  
}

export default LoginForm