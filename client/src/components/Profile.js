import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import PieceForm from './PieceForm';
import DisplayPiece from './DisplayPiece';


function Profile(){

    const [addPieceBtnClick, setAddPieceBtnClick] = useState(false)

    return(
        <div className="profile-container">
            <h2>Welcome To Your Virtual Closet</h2>
            <div className="add-piece-btn-container">
                <button className='btn' onClick={(e) => setAddPieceBtnClick(!addPieceBtnClick)}> 
                    Add New Piece To Closet
                </button>
            {addPieceBtnClick ? (<PieceForm addPieceBtnClick={addPieceBtnClick} setAddPieceBtnClick={setAddPieceBtnClick} />) : (null)}
            <DisplayPiece/>
            </div>
        </div>
    )
}


export default Profile