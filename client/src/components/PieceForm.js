import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";
import { fetchStyles } from "../redux/stylesSlice";
import {brandAdded} from "../redux/brandsSlice";
import BrandForm from './BrandForm';
import StyleForm from './StyleForm';
// import {pieceAdded} from "../redux/pieceSlice";
import {pieceAdded} from "../redux/userSlice";
import {renderBrand} from "../redux/userSlice";
import { BsPlusCircle } from "react-icons/bs";
import '../App.css'

function PieceForm({addPieceBtnClick, setAddPieceBtnClick}) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [size, setSize] = useState("")
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState("")
    const [showBrandForm, setShowBrandForm] = useState(false)
    const [brandName, setBrandName] = useState("")
    const [headQuarters, setHeadQuarters] = useState("")
    const [logoUrl, setLogoUrl] = useState("")
    const [brandDescription, setBrandDescription] = useState("")
    const [styleId, setStyleId] = useState(0)
    const [brandId, setBrandId] = useState(0)
    const [styleClick, setStyleClick] = useState(false)
    const [brandClick, setBrandClick] = useState(false)
    const dispatch = useDispatch()
    const brands = useSelector((state) => state.brands.entities);
    const styles = useSelector((state) => state.styles.entities);
    const user = useSelector((state) => state.user.entities)

    

      function handleBrand(e){
        setBrandId(e.target.value)
      }

      function handleStyle(e){
        setStyleId(e.target.value)
      }

      function onImageChange(e){
        console.log(e.target.files[0])
        setImage(e.target.files[0])
      }

      function handleSubmit(e){
        e.preventDefault() 
        setAddPieceBtnClick(!addPieceBtnClick)        
        fetch("/pieces", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'name' : name,
                'price' : price,
                'size' : size,
                'featured_image': image,
                'image_url' : imageUrl,
                'notes' :  description,
                'style_id' : styleId,
                'brand_id' : brandId,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((p) =>{
                dispatch(pieceAdded(p))
              })
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
        
      }

  return (
    <div className="form-container">
        <form className="forms" onSubmit={handleSubmit}>
        {/* <button className="add-new-brand-piece" onClick={(e) => setBrandClick(!brandClick)}> 
            <BsPlusCircle/> 
        </button> */}
          <br />
          <label className='form-label'></label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br/>
          {/* <label> Upload Phtoto:
            <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
          </label> */}
          {/* <br/> */}
          <label className='portfolio-form-label'></label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder="Image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
          <br />
          <label className='portfolio-form-label'></label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder="$100..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />

          <label className='portfolio-form-label'></label>
          <input
            type='text'
            className="form-inputs"
            autoComplete="off"
            placeholder="Medium..."
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></input>
          <br />

          <label className='portfolio-form-label'></label>
          <textarea
            type='text'
            className="form-inputs"
            placeholder="I think it'd go well with..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/> 
          <div className="brand-style-selectors">
          <label  id='category-form' >Brand:</label>
                <select className="select-form" onChange={handleBrand}>
                    <option></option>
                    {brands.map((b) => {
                        return <option key={b.id} value={b.id}>{b.name}</option>
                     
                    })}
                </select>    
            </div>
        <br/>
        <div className="brand-style-selectors">
          <label id='category-form' >Style:</label>
                <select className="select-form" onChange={handleStyle}>
                    <option></option>
                    {styles.map((s) => {
                        return <option key={s.id} value={s.id}>{s.name}</option>
                     
                    })}
                </select>   
        </div> 
        <br/>

        <div className="add-style-btn">
          <button className="btn" type='submit'>Add Piece</button>
          </div>

        </form>

        {/* <input type="file" accept="image/*" multiple={false} onChange={onImageChange} /> */}
    </div>
  )
}

export default PieceForm