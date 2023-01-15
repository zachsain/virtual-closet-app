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
          <h3 className="pages-header"> So long... </h3>
          <div className="good-bye-btn">
          <button className="btn" id="logout-btn"  onClick={handleClick}>Logout</button>
          </div>
        </div>
      )
}

export default Logout;