import React, {useState} from 'react'
import '../App.css';
import PieceCard from './PieceCard';
import { useSelector, useDispatch } from "react-redux";
import '../App.css'

function BrandCard({
    name, 
    headQuarters, 
    logo, 
    description, 
    id, 
    showPieceClick,
    showPieces,
    setShowPieces
    }) {
   
    // const [showPieces, setShowPieces] = useState(false)

    const user = useSelector((state) => state.user.entities)

    const pieces = user.pieces.filter((p) => p.brand_id === id)

    const displayPiece = pieces.map((p) => {
        return <PieceCard 
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    size={p.size}
                    description={p.description}
                    image={p.featured_image}
                    id={p.id}
                    imageUrl={p.image_url}
                />
       })  
    

  return (
    <div className="brand-card-container">
        <div className="brand-card">
        <h3 className="brand-name">{name}</h3>
        <h4 className="brand-hq">{headQuarters}</h4>
        <img className="brand-img" src={logo} alt="brand-image" />
        <p className="brand-description">{description}</p>
        {showPieceClick ? 
                (<div><button onClick={() => (setShowPieces(!showPieces))}>Show My Pieces</button> </div> ) : (null)}
            {showPieces ? (displayPiece) : (null)}
        </div>
    </div>
  )
}


export default BrandCard;