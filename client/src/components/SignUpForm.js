import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import '../App.css';


function SignUpForm({setUser}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)
    // const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

        function handleSubmit(e){
            e.preventDefault();
            const formData = new FormData();
            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('featured_image', image);
            console.log(formData)
            fetch('/signup', {
              method: 'POST',
              body: formData
            })
            .then(r => r.json())
            .then(user => (setUser(user), console.log(user)))
        }

    function onImageChange(e){
        setImage(e.target.files[0]);
    }
  
    return (
        <div>
        <div id="signup">
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="signupLabel">Username: </label>
            <input
              className="signup-input"
              type="text"
              id="name"
              autoComplete="off"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
  
            <label className="signupLabel">Email:</label>
            <input
              className="signup-input"
              type="email"
              id="email"
              autoComplete="off"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
  
            <label className="signupLabel">Password:</label>
            <input
              className="signup-input"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />

            <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
            
            <br />

            <div className="signup-btn">
            <button id="signup-btn" className="btn" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    )
    
}

export default SignUpForm