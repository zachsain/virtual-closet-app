import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { userAdded } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import '../App.css';


function SignUpForm({setUser}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)
    // const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch()
    
        function handleSubmit(e){
            e.preventDefault();
            const formData = new FormData();
            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('featured_image', image);
            fetch('/signup', {
              method: 'POST',
              body: formData
            })
            .then(r => r.json())
            .then(user => (setUser(user), dispatch(userAdded(user)), history.push('/instructions')))
        }

    function onImageChange(e){
      console.log(e.target.files[0])
        setImage(e.target.files[0]);
    }
  
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

            <input className="form-inputs" type="file" accept="image/*" multiple={false} onChange={onImageChange} />
            
            <br />

            <div className="add-style-btn">
            <button id="signup-btn" className="btn" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    )
    
}

export default SignUpForm