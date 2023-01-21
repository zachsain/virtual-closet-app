import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAdded } from "../redux/userSlice";
import '../App.css';


function LoginForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch()

    function handleLogin(e) {

        e.preventDefault();
        setIsLoading(true);

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            history.push('/instructions')
            r.json().then((user) => {
            //  return setUser(user)
            // console.log(user)
                dispatch(userAdded(user))
                setUser(user)
            })
          } else {
            r.json().then((err) => console.log(err.errors));
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
          <div className="login-btn">
          <button className="btn" type='submit'>Login
          </button>
          </div>
          {isLoading ? (<h1>Loading...</h1>) : (null)}
        </form>
    </div>
  </div>
 
)
  
}

export default LoginForm