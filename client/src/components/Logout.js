import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../App.css';

function Logout ({ user, setUser }) {
    const history = useHistory()

    function handleClick(e){    
        e.preventDefault()
        
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              console.log("good bye")
              setUser(null)
            //   history.push('/')
            }
          });
    }
   
      return(
        <div id="logout-component">
          <button  id="logout-btn"  onClick={handleClick}>Logout</button>
        </div>
      )
}

export default Logout;