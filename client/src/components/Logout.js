import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogout } from "../redux/userSlice";
import '../App.css';

function Logout ({ user, setUser }) {
    const history = useHistory()
    const dispatch = useDispatch()

    function handleClick(e){    
        e.preventDefault()
        
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              console.log("good bye")
              setUser(null)
              dispatch(userLogout(null))
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