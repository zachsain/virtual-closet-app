import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { userAdded } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import DisplayErrors from './DisplayErrors';
import '../App.css';


function SignUpForm({setUser}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch()
    
        function handleSubmit(e){
            e.preventDefault();
            fetch('/signup', {
              method: "POST",
              headers: {
               "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                password,
                email,
              }),
            }).then((r) => {
              if (r.ok) {
                r.json().then((user) => {
                  dispatch(userAdded(user))
                  setUser(user)
                  history.push('/instructions')
                })
              } else {
                r.json().then((err) => setErrors(err.errors), setShowErrors(true));
              }
            });
        }

  
    // function onImageChange(e){
    //   console.log(e.target.files[0])
    //     setImage(e.target.files[0]);
    // }
    
    
    return (
        <div>
        <div className="form-container">
        <h4 className="new-account-header">Create a new account:</h4>
          <form className="forms" onSubmit={handleSubmit}>
            <label className='form-label'> </label>
            <input
              className="form-inputs"
              type="text"
              id="name"
              autoComplete="off"
              placeholder="user name..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
  
            <label className='form-label'></label>
            <input
              className="form-inputs"
              type="email"
              id="email"
              autoComplete="off"
              placeholder="email@example.com..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
  
            <label className='form-label'></label>
            <input
              className="form-inputs"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />

            {/* <input className="form-inputs" type="file" accept="image/*" multiple={false} onChange={onImageChange} /> */}
            
            <br />
            {showErrors ? (<div><DisplayErrors error={errors} /></div>) : (null)}
            <div className="add-style-btn">
            <button id="signup-btn" className="btn" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    )
    
}

export default SignUpForm