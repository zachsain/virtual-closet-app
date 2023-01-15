import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import PieceForm from './PieceForm';
import DisplayPiece from './DisplayPiece';
import '../App.css';


function Profile({loaded}){

    const [addPieceBtnClick, setAddPieceBtnClick] = useState(false)

    return(
        <div className="profile-container">
            <h2 className="pages-header">Closet</h2>
            <div className="add-piece-btn-container">
                <button id="add-styles-btn" className='btn' onClick={(e) => setAddPieceBtnClick(!addPieceBtnClick)}> 
                    Add New Piece
                </button>
            {addPieceBtnClick ? (<PieceForm addPieceBtnClick={addPieceBtnClick} setAddPieceBtnClick={setAddPieceBtnClick} />) : (null)}
            <DisplayPiece loaded={loaded}/>
            </div>
        </div>
    )
}


export default Profile