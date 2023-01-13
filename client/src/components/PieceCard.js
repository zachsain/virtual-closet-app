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
    brands
}) {
    
  const user = useSelector((state) => state.user.entities)
  const [brandLoaded, setBrandLoaded] = useState(false)
  const history = useHistory()
//   const brands = useSelector((state) => state.brands.entities);
//   const brands = useSelector((state) => state.brands.entities);


  const dispatch = useDispatch()

  let brand = brands.find((b) => b.id === brandId)

//   let b = user.brands.find((b) => b.id === brandId)

  function handlePieceClick(e){
        e.preventDefault()
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
    <div className="piece-card-contatiner">
        <div onClick={handlePieceClick}className="piece-card">
            <h3 className="piece-name">{name}</h3>
            <img className="piece-img" src={imageUrl} alt="piece-image" />
            <h4>Price: {price} </h4>
            <p className="piece-description">{description}</p>
            {/* {loaded ? (<div><h4>Brand: {brand.name}</h4></div>) : (null)} */}
            <button onClick={handleDelete}>
            <FaTimesCircle />
            </button>
        </div>
    </div>
  )
}

export default PieceCard