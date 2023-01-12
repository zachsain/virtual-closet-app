import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import PieceForm from './PieceForm';


function Profile(){

    const [addPieceBtnClick, setAddPieceBtnClick] = useState(false)

    return(
        <div className="profile-container">
            <h2>Welcome To Your Virtual Closet</h2>
            {/* <div className="image-container">
                <img  className="profile-photo" src={user.featured_image.url}/>
            </div>
            <h4 className="profile-user-name">{user.username}</h4> */}
            <div className="add-piece-btn-container">
                <button className='btn' onClick={(e) => setAddPieceBtnClick(!addPieceBtnClick)}> 
                    Add New Piece To Closet
                </button>
            {addPieceBtnClick ? (<PieceForm />) : (null)}
            </div>
        </div>
    )
}


export default Profile