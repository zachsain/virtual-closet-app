import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";
// import {pieceAdded} from "../redux/userSlice";
import {pieceDeleted} from "../redux/userSlice";
import '../App.css';


function PieceCard({
    name, 
    price, 
    size, 
    description, 
    image,
    brandId,
    styleId,
    id,
    imageUrl
}) {
    
  const user = useSelector((state) => state.user.entities)
  const brand = user.brands.find((b) => b.id === brandId)
  const dispatch = useDispatch()


    function handleDelete(e){ 
        dispatch(pieceDeleted(id))
        fetch(`/pieces/${id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                console.log("deleted")
                dispatch(pieceDeleted(id))
              }
            })
            .catch((err) => console.log(err))
    }


  return (
    <div className="piece-card-contatiner">
        <div className="piece-card">
            <h3 className="piece-name">{name}</h3>
            <img className="piece-img" src={imageUrl} alt="piece-image" />
            <h4>Price: {price} </h4>
            <p className="piece-description">{description}</p>
            {/* <h4>Brand: {brand.name}</h4> */}
            <button onClick={handleDelete}>
            <FaTimesCircle />
            </button>
        </div>
    </div>
  )
}

export default PieceCard