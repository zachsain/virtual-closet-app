import React, {useState, useEffect} from 'react'
import DisplayStyles from './DisplayStyles'
import StyleForm from './StyleForm';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { fetchStyles } from "../redux/stylesSlice";
import { userAdded } from '../redux/userSlice';

function Styles() {
  const [addStyleBtnClick, setAddStyleBtnClick] = useState(false)
  const [myStyleBtnClick, setMyStyleBtnClick] = useState(false)
  const [showPieceClick, setShowPieceClick] = useState(false)
  const [showPieces, setShowPieces] = useState(false)
  const dispatch = useDispatch()
 
  const styles = useSelector((state) => state.styles.entities); 
  const myStyles = useSelector((state) => state.user.entities)

  function handeMyStyleClick(){
    setShowPieces(false)
    setShowPieceClick(!showPieceClick)
    setMyStyleBtnClick(!myStyleBtnClick)
  }
  return (
    <div className="styles-page-container">
        <div className="styles-btn">
            <button onClick={(e) => setAddStyleBtnClick(!addStyleBtnClick)} className="btn">Add New Style</button>
        </div>

        <div className="styles-btn">
            <button onClick={handeMyStyleClick} className="btn">See My Styles</button>
        </div>
        {addStyleBtnClick ? (<StyleForm addStyleBtnClick={addStyleBtnClick} setAddStyleBtnClick={setAddStyleBtnClick} />) : (null)}
        {myStyleBtnClick ? ( <DisplayStyles setShowPieces={setShowPieces} showPieces={showPieces} showPieceClick={showPieceClick} styles={myStyles.styles} />) : (  <DisplayStyles showPieceClick={showPieceClick}  styles={styles} />)}
        {/* <DisplayStyles styles={styles} /> */}
    </div>
  )
}

export default Styles