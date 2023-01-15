import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";
// import {pieceAdded} from "../redux/userSlice";
import {pieceDeleted} from "../redux/userSlice";
import { fetchBrands } from "../redux/brandsSlice";
import { useHistory} from 'react-router-dom';
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
    imageUrl,
    loaded,
    brands,
    displayDelete
}) {
    
  const user = useSelector((state) => state.user.entities)
  const [brandLoaded, setBrandLoaded] = useState(false)
  const history = useHistory()

  const dispatch = useDispatch()

  function handlePieceClick(){
        history.push(`pieces/${id}`)
  }


    function handleDelete(e){ 
        console.log(id)
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
    <div >
        <div className="card-container">
            <div className="click-container" onClick={handlePieceClick}>
             <h2 className="card-name">{name}</h2>
             <img className="style-img" src={imageUrl} alt="piece-image" />
             <h4 className="card-name">Price: {price} </h4>
             <h5 className="card-name">Size: {size}</h5>
             <h3 className="card-description-header">About this piece:</h3>
             <p className="card-description">{description}</p>
            {/* {loaded ? (<div><h4>Brand: {brand.name}</h4></div>) : (null)} */}
            </div>

            {displayDelete ? ( <button id="delete-btn" className="btn" onClick={handleDelete}>
                Remove
            {/* <FaTimesCircle  size="1.3em"  /> */}
            </button>) : (null)}
            {/* <button onClick={handleDelete}>
            <FaTimesCircle />
            </button> */}
        </div>
    </div>
  )
}

export default PieceCard