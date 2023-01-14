import React, {useState} from 'react'
import DisplayStyles from './DisplayStyles'
import StyleForm from './StyleForm';
import { useSelector, useDispatch } from "react-redux";
import { fetchStyles } from "../redux/stylesSlice";

function Styles() {
  const [addStyleBtnClick, setAddStyleBtnClick] = useState(false)
  const dispatch = useDispatch()
 
  const styles = useSelector((state) => state.styles.entities);

  return (
    <div className="styles-page-container">
        <div className="styles-btn">
            <button onClick={(e) => setAddStyleBtnClick(!addStyleBtnClick)} className="btn">Add New Style</button>
        </div>
        {addStyleBtnClick ? (<StyleForm addStyleBtnClick={addStyleBtnClick} setAddStyleBtnClick={setAddStyleBtnClick} />) : (null)}
        <DisplayStyles styles={styles} />
    </div>
  )
}

export default Styles