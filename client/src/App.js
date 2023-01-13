import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Logout from './components/Logout'
import Profile from "./components/Profile";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/userSlice";
import Brands from "./components/Brands";
import Styles from "./components/Styles";
import { fetchBrands } from "./redux/brandsSlice";
import DisplaySinglePiece from "./components/DisplaySinglePiece";
import DisplaySingleStyle from "./components/DisplaySingleStyle";
import './App.css';

function App() {

  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const dispatch = useDispatch();
  const [test, setTest] = useState("")
  const [loaded, setLoaded] = useState(false)
  
  const userFetch = useSelector((state) => state.user.entities);

  let login;

  if (userFetch.errors){
    console.log("no")
    login = null
  } else {
    console.log("ok")
    login = true
   
  }

  useEffect(() => {
    dispatch(fetchBrands());
    setLoaded(true)
  }, [dispatch]);


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
       <Route path="/styles">
         <Styles />
       </Route>
       <Route path="/brands">
         <Brands />
       </Route>
       <Route path="/pieces/:id">
        <DisplaySinglePiece />
       </Route>
       <Route path="/styles/:id">
        <DisplaySingleStyle />
       </Route>
       <Route path="/">
          <Profile loaded={loaded}/>
       </Route>  
     </Switch>
   </div>
    // </BrowserRouter>
  );
}

export default App;