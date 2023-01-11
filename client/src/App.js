import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Logout from './components/Logout'
import Profile from "./components/Profile";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/userSlice";
import Brands from "./components/Brands";
import './App.css';

function App() {

  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const dispatch = useDispatch();
  const [test, setTest] = useState("")
  
  const userFetch = useSelector((state) => state.user.entities);

  // let hello = userFetch.map((a) => {
  //   return b = a.username
  // })

  let msg = {"errors" : ["Not authorized"]}
  let login;

  if (userFetch.errors){
    console.log("no")
    login = null
  } else {
    console.log("ok")
    login = true
   
  }



  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  } , []);

//  console.log(userFetch.featured_image)

//  const mapper = userFetch.map((a) => {
//     b = a.id
//     c = a.username
//     d = a.email
//  })

// console.log(b)

   

  if (!user) return (
    <div style={{
        display:'flex',
        flexFlow: 'row wrap',
        textAlign: 'center',
        justifyContent:'space-around',
        minHeight: '100vh',
        backgroundSize: 'cover',  
        padding: "100px"}}>
        <Login setUser={setUser} />
    </div>)

  return (
    // <BrowserRouter>
    <div className="App">
    <NavBar user={user} setUser={setUser} />
     <Switch>
       <Route path="/logout">
         <Logout user={user} setUser={setUser} />
       </Route>
       <Route path="/something">
         <h3>Maybe a search</h3>
       </Route>
       <Route path="/brands">
         <Brands />
       </Route>
       <Route path="/">
          <Profile user={user} setUser={setUser}/>
       </Route>  
     </Switch>
   </div>
    // </BrowserRouter>
  );
}

export default App;