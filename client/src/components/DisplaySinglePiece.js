import React, {useState}from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";
import {useParams} from 'react-router-dom';
import {pieceDeleted} from "../redux/userSlice";
import { useHistory} from 'react-router-dom';
import BrandCard from './BrandCard';
import StylesCard from './StylesCard';
import { FiEdit } from "react-icons/fi";
import PieceEditForm from './PieceEditForm';

function DisplaySinglePiece() {
    const params = useParams();
    const history = useHistory()
    const user = useSelector((state) => state.user.entities);
    const dispatch = useDispatch()
    const [editClick, setEditClick] = useState(false)

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
        <h5>Size: {piece.size}</h5>
        <p className="piece-description">{piece.notes}</p>
        {/* {loaded ? (<div><h4>Brand: {brand.name}</h4></div>) : (null)} */}
        <button onClick={handleDelete}>
        <FaTimesCircle size="1.7em" id="edit-btn-icon" />
        </button>
        <button id="edit-btn" onClick={() => setEditClick(!editClick)}>
            <FiEdit size="1.7em" id="edit-btn-icon"/>
        </button>
        {editClick ? (<PieceEditForm
            styleId={style.id}
            brandId={brand.id} 
            userId ={user.id}
            pieceName={piece.name}
            pieceDescription={piece.notes}
            piecePrice={piece.price}
            pieceSize={piece.size}

            />) : (null)}

    </div>
    <div>
        <h5>Made By:</h5>
        <BrandCard 
            name={brand.name}
            headQuarters={brand.head_quarters}
            logo={brand.logo_url}
            description={brand.description}
                />
    </div>
   
    <div>
        <h5>Style: </h5>
        <StylesCard 
            name={style.name}
            photo={style.url_photo}
            description={style.description}
            />

    </div>
</div>
  )
}


export default DisplaySinglePiece