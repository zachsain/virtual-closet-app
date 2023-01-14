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
    const dispatch = useDispatch()
    const [editClick, setEditClick] = useState(false)
    const user = useSelector((state) => state.user.entities);
    const brands = useSelector((state) => state.brands.entities)
    const styles = useSelector((state) => state.styles.entities)

    let piece = user.pieces.find(p => p.id == params.id)
    let filterBrand = brands.find(b => b.id == piece.brand_id)
    let filteredStyle = styles.find(s => s.id == piece.style_id ) 
    let style = user.styles.find(s => s.id == piece.style_id)

    console.log(user)
    console.log(filterBrand)
    // console.log(style.name)
    // console.log(filterBrand)

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
            styleId={filteredStyle.id}
            brandId={filterBrand.id} 
            userId ={user.id}
            pieceName={piece.name}
            pieceDescription={piece.notes}
            piecePrice={piece.price}
            pieceSize={piece.size}
            id={piece.id}
            setEditClick={setEditClick}
            editClick={editClick}

            />) : (null)}

    </div>
    <div>
        <h5>Made By:</h5>
        <BrandCard 
            name={filterBrand.name}
            headQuarters={filterBrand.head_quarters}
            logo={filterBrand.logo_url}
            description={filterBrand.description}
                />
    </div>
   
    <div>
        <h5>Style: </h5>
        <StylesCard 
            name={filteredStyle.name}
            photo={filteredStyle.url_photo}
            description={filteredStyle.description}
            />

    </div> 
</div>
  )
}


export default DisplaySinglePiece