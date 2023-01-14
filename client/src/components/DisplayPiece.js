import React, { useState, useEffect } from 'react'
import PieceCard from './PieceCard';
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";

function DisplayPiece({loaded}) {

const user = useSelector((state) => state.user.entities)
const [brandLoaded, setBrandLoaded] = useState(false)
const brands = useSelector((state) => state.brands.entities);
const [displayDelete, setDisplayDelete] = useState(true)
const dispatch = useDispatch()





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
                brands={brands}
                loaded={loaded}
                brandLoaded={brandLoaded}
                displayDelete={displayDelete}
            />
})
  return (
    <div>Display Piece
        {closet}
    </div>

  )
}

export default DisplayPiece;