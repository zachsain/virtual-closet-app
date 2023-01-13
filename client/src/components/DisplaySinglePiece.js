import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";
import {useParams} from 'react-router-dom';
import {pieceDeleted} from "../redux/userSlice";
import { useHistory} from 'react-router-dom';
import BrandCard from './BrandCard';

function DisplaySinglePiece() {
    const params = useParams();
    const history = useHistory()
    const user = useSelector((state) => state.user.entities);
    const dispatch = useDispatch()

    let piece = user.pieces.find(p => p.id == params.id)
    let brand = user.brands.find(b => b.id == piece.brand_id)
    let style = user.styles.find(s => s.id == piece.style_id)

    console.log(brand.name)
    console.log(style.name)

    function handleDelete(e){ 
        console.log(params.id)
        fetch(`/pieces/${params.id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                console.log("deleted")
                history.push('/')
                dispatch(pieceDeleted(params.id))
              }
            })
            .catch((err) => console.log(err))
    }

  return (
    <div className="piece-card-contatiner">
    <div className="piece-card">
        <h3 className="piece-name">{piece.name}</h3>
        <img className="piece-img" src={piece.image_url} alt="piece-image" />
        <h4>Price: {piece.price} </h4>
        <p className="piece-description">{piece.notes}</p>
        {/* {loaded ? (<div><h4>Brand: {brand.name}</h4></div>) : (null)} */}
        <button onClick={handleDelete}>
        <FaTimesCircle />
        </button>
    </div>
    <div>
    <BrandCard 
                key={brand.id}
                name={brand.name}
                headQuarters={brand.head_quarters}
                logo={brand.logo_url}
                description={brand.description}
            />
    </div>
</div>
  )
}


export default DisplaySinglePiece