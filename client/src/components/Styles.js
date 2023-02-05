import React, {useState, useEffect} from 'react'
import DisplayStyles from './DisplayStyles'
import StyleForm from './StyleForm';
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import '../App.css'

function Styles() {
  const [addStyleBtnClick, setAddStyleBtnClick] = useState(false)
  const [myStyleBtnClick, setMyStyleBtnClick] = useState(false)
  const [showPieceClick, setShowPieceClick] = useState(false)
  const [showPieces, setShowPieces] = useState(false)
  const dispatch = useDispatch();
 
  const styles = useSelector((state) => state.styles.entities); 
  const myStyles = useSelector((state) => state.user.entities)

  function handeMyStyleClick(){
    setShowPieces(!showPieces)
    setShowPieceClick(!showPieceClick)
    setMyStyleBtnClick(!myStyleBtnClick)
  }

  useEffect(() => {
    dispatch(fetchUser());
  }, [myStyleBtnClick]); 

  return (
    <div className="styles-page-container">
        <h3 className="pages-header"> STYLES </h3>
        <div className="styles-btn">
            <button id="add-styles-btn" data-inline="true" onClick={(e) => setAddStyleBtnClick(!addStyleBtnClick)} className="btn">Add Styles</button>

            {myStyleBtnClick ? ( <button id="my-styles-btn" data-inline="true" onClick={handeMyStyleClick} className="btn">All Styles</button>) 
            : (<button id="my-styles-btn" data-inline="true" onClick={handeMyStyleClick} className="btn">See My Styles</button>)}
            {/* <button id="my-styles-btn" data-inline="true" onClick={handeMyStyleClick} className="btn">See My Styles</button> */}
        </div>
        {addStyleBtnClick ? (<StyleForm addStyleBtnClick={addStyleBtnClick} setAddStyleBtnClick={setAddStyleBtnClick} />) : (null)}
        {myStyleBtnClick ? (
             <DisplayStyles 
              myStyleBtnClick={myStyleBtnClick} 
              setShowPieces={setShowPieces} 
              showPieces={showPieces} 
              showPieceClick={showPieceClick} 
              styles={myStyles.styles} 
              />) 
              : 
              (
              <DisplayStyles 
                showPieceClick={showPieceClick}  
                styles={styles} 
              />
            )}
    </div>
  )
}

export default Styles