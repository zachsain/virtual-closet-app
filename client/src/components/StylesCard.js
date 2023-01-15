import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PieceCard from './PieceCard';
import '../App.css';

function StylesCard({name, photo, description, id, styles, showPieceClick, showPieces, setShowPieces}) {
   const history = useHistory()
   const user = useSelector((state) => state.user.entities)
//    const [showPieces, setShowPieces] = useState(false)

   const pieces = user.pieces.filter((s) => s.style_id === id)
//    console.log(pieces)
//    console.log(styles)




   const dislayPiece = pieces.map((p) => {
    return <PieceCard 
                key={p.id}
                name={p.name}
                price={p.price}
                size={p.size}
                description={p.description}
                image={p.featured_image}
                id={p.id}
                imageUrl={p.image_url}
                showPieces={showPieces}
                setShowPieces={setShowPieces}
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
                (<div><button className="btn" onClick={() => (setShowPieces(!showPieces))}>Show My Pieces</button> </div> ) : (null)}
            {showPieces ? (dislayPiece) : (null)}
        </div>
    </div>
</div>
  )
}

export default StylesCard