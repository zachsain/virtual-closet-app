import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";
import { fetchStyles } from "../redux/stylesSlice";
import {brandAdded} from "../redux/brandsSlice";
import BrandForm from './BrandForm';
import StyleForm from './StyleForm';
// import {pieceAdded} from "../redux/pieceSlice";

import {pieceUpdated} from "../redux/userSlice";

import { BsPlusCircle } from "react-icons/bs";
import {pieceDeleted} from "../redux/pieceSlice";
import DisplayErrors from './DisplayErrors';
import '../App.css'


function PieceEditForm({
            id, 
            styleId, 
            brandId,
            pieceName,
            pieceDescription,
            pieceImage,
            piecePrice,
            pieceSize,
            setEditClick,
            editClick
            }) {

    const [name, setName] = useState(pieceName)
    const [price, setPrice] = useState(piecePrice)
    const [description, setDescription] = useState(pieceDescription)
    const [size, setSize] = useState(pieceSize)
    const [imageUrl, setImageUrl] = useState(pieceImage)
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)
    const dispatch = useDispatch()
  
      function handleSubmit(e){
        e.preventDefault() 
        
        fetch(`/pieces/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'name' : name,
                'price' : price,
                'size' : size,
                'image_url' : imageUrl,
                'notes' :  description,
                'style_id' : styleId,
                'brand_id' : brandId
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((p) =>{
                setEditClick(!editClick) 
                dispatch(pieceUpdated(p))
              })
            } else {
              r.json().then((err) => setErrors(err.errors), setShowErrors(true), setEditClick(true));
            }
          });
        
      }

  
    let errorMsg = errors.map((e) => {
      return <DisplayErrors key={e[0]} error={e} />
    })

  return (
    <div className= "form-container">
        <form className="forms" onSubmit={handleSubmit}>
          <br />
          <label className="edit-form-label">Name:</label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder={pieceName}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br/>

          <label className="edit-form-label">Image Url:</label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder="URL Photo..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
          <br />
          <label className="edit-form-label">Price</label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder={piecePrice}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />

          <label className="edit-form-label">Size:</label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder={pieceSize}
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></input>
          <br />

          <label className="edit-form-label"></label>
          <textarea
            type='text'
            className="form-inputs"
            placeholder={pieceDescription}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/> 
        
        <br/>
        {showErrors ? (errorMsg) : (null)}
        <div className="add-piece-btn">
          <button className="btn" type='submit'>Add Piece</button>
        </div>

        </form>
    </div>
  )   
}


export default PieceEditForm
