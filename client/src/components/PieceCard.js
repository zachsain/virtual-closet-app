import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import '../App.css';


function PieceCard({
    name, 
    price, 
    size, 
    description, 
    image,
    brandId,
    styleId
}) {
  const user = useSelector((state) => state.user.entities)
  const brand = user.brands.find((b) => b.id === brandId)

  console.log(brand)

  return (
    <div className="piece-card-contatiner">
        <div className="piece-card">
            <h3 className="piece-name">{name}</h3>
            <img className="piece-img" src={image} alt="piece-image" />
            <h4>Price: {price} </h4>
            <p className="piece-description">{description}</p>
            <h4>Brand: {brand.name}</h4>
        </div>
    </div>
  )
}

export default PieceCard