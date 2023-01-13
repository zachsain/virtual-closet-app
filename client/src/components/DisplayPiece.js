import React from 'react'
import PieceCard from './PieceCard';
import { useSelector, useDispatch } from "react-redux";

function DisplayPiece() {

const user = useSelector((state) => state.user.entities)

console.log(user)

let closet = user.pieces.map((p) => {
    return <PieceCard 
                key={p.id}
                imageUrl={p.image_url}
                id={p.id}
                name={p.name}
                price={p.price}
                size={p.size}
                description={p.notes}
                image={p.featured_image}
                brandId={p.brand_id}
                styleId={p.style_id}

            />
})
  return (
    <div>Display Piece
        {closet}
    </div>

  )
}

export default DisplayPiece;