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
import '../App.css'

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


    function handleDelete(e){ 
        console.log(params.id)
        fetch(`/pieces/${params.id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                history.push('/')
                dispatch(pieceDeleted(params.id))
              }
            })
            .catch((err) => console.log(err))
    }

  return (
    <div className="single-piece-container">
    <div className="card-container">
        <h2 className="card-name">{piece.name}</h2>
        <img className="style-img" src={piece.image_url} alt="piece-image" />
        <h4 className="card-name">Price: {piece.price} </h4>
        <h5 className="card-name">Size: {piece.size}</h5>
        <h3 className="card-description-header">About this piece:</h3>
        <p className="card-description">{piece.notes}</p>
        {/* {loaded ? (<div><h4>Brand: {brand.name}</h4></div>) : (null)} */}
        <br/>
        <button  id="delete-btn" className="btn" onClick={handleDelete}>
            Remove
        </button>
        <br/>
        <button className="btn" id="edit-btn" onClick={() => setEditClick(!editClick)}>
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
        <h3 className="single-piece-header">Made By:</h3>
        <BrandCard 
            name={filterBrand.name}
            headQuarters={filterBrand.head_quarters}
            logo={filterBrand.logo_url}
            description={filterBrand.description}
                />
    </div>
   
    <div>
        <h3 className="single-piece-header">Style: </h3>
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