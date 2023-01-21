import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PieceCard from './PieceCard';
import '../App.css';

function StylesCard({
            name, 
            photo, 
            description, 
            id, 
            styles, 
            showPieceClick, 
            myStyleBtnClick
        }) {
    
   const history = useHistory()
   const user = useSelector((state) => state.user.entities)
   const pieces = user.pieces.filter((s) => s.style_id === id)
   const [piecesShow, setPiecesShow] = useState(false)
   
   useEffect(() => {
      setPiecesShow(false)
    }, [myStyleBtnClick]);

    const dislayPiece = pieces.map((p) => {
    return <PieceCard 
                key={p.id}
                name={p.name}
                price={p.price}
                size={p.size}
                description={p.notes}
                image={p.featured_image}
                id={p.id}
                imageUrl={p.image_url}
            />
   })  

   return (
    <div className="card-container">
        <div> 
            <div className="cards">
            <h2 className="card-name">{name}</h2>
            <img className="style-img" src={photo} alt="style-image" />
            <br/>
            <h3 className="card-description-header">About this style:</h3>
            <p className="card-description">{description}</p>
            {showPieceClick ? 
                (<div><button id="show-pieces-btn" className="btn" onClick={() => (setPiecesShow(!piecesShow))}>Show My Pieces</button> </div> ) : (null)}
            {piecesShow && myStyleBtnClick ? (dislayPiece) : (null)}
        </div>
    </div>
</div>
  )
}

export default StylesCard