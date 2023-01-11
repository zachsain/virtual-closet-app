import React, {useState, useEffect} from 'react'
import DisplayStyles from './DisplayStyles'
import StyleForm from './StyleForm';
import { useSelector, useDispatch } from "react-redux";
import { fetchStyles } from "../redux/stylesSlice";

function Styles() {
  const [addStyleBtnClick, setAddStyleBtnClick] = useState(false)
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchStyles());
  }, [dispatch]);


  return (
    <div className="styles-page-container">
        <div className="styles-btn">
            <button onClick={(e) => setAddStyleBtnClick(!addStyleBtnClick)} className="btn">Add New Style</button>
        </div>
        {addStyleBtnClick ? (<StyleForm />) : (null)}
    </div>
  )
}

export default Styles