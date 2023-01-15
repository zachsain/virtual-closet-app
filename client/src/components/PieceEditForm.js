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
import '../App.css'


function PieceEditForm({
            id, 
            styleId, 
            brandId,
             userId,
            pieceName,
            pieceDescription,
            piecePrice,
            pieceSize,
            setEditClick,
            editClick
            }) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [size, setSize] = useState("")
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState("")
    // const [showBrandForm, setShowBrandForm] = useState(false)
    // const [brandName, setBrandName] = useState("")
    // const [headQuarters, setHeadQuarters] = useState("")
    // const [logoUrl, setLogoUrl] = useState("")
    // const [brandDescription, setBrandDescription] = useState("")
    // const [styleId, setStyleId] = useState(0)
    // const [brandId, setBrandId] = useState(0)
    // const [styleClick, setStyleClick] = useState(false)
    // const [brandClick, setBrandClick] = useState(false)
    const dispatch = useDispatch()
    // const brands = useSelector((state) => state.brands.entities);
    // const styles = useSelector((state) => state.styles.entities);
    // const user = useSelector((state) => state.user.entities)

    // useEffect(() => {
    //     dispatch(fetchBrands());
    //   }, [dispatch]);

    //   useEffect(() => {
    //     dispatch(fetchStyles());
    //   }, [dispatch]);

    //   function handleBrand(e){
    //     setBrandId(e.target.value)
    //   }

    //   function handleStyle(e){
    //     setStyleId(e.target.value)
    //   }

      function onImageChange(e){
        console.log(e.target.files[0])
        setImage(e.target.files[0])
      }

      function handleSubmit(e){
        e.preventDefault() 
        setEditClick(!editClick)
        fetch(`/pieces/${id}`, {
            method: "PATCH",
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
                'user_id' : userId
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((p) =>{
                console.log(p)  
                dispatch(pieceUpdated(p))
              })
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
        
      }

  return (
    <div className="piece-form-container">
        <form onSubmit={handleSubmit}>
        {/* <label className='category-form'>Brand:
                <select onChange={handleBrand}className="selector">
                    <option></option>
                    {brands.map((b) => {
                        return <option key={b.id} value={b.id}>{b.name}</option>
                     
                    })}
                </select>    
        </label>
        <button className="add-new-brand-piece" onClick={(e) => setBrandClick(!brandClick)}> 
            <BsPlusCircle/> 
        </button> */}
          <br />
          <label className='portfolio-form-label'>Name:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder={pieceName}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br/>
          {/* <label> Upload Phtoto:
            <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
          </label> */}
          {/* <br/> */}
          <label className='portfolio-form-label'>Image:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
          <br />
          <label className='portfolio-form-label'>Price:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder={piecePrice}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />

          <label className='portfolio-form-label'>Size:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder={pieceSize}
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></input>
          <br />

          <label className='portfolio-form-label'>Description of Piece:</label>
          <textarea
            type='text'
            placeholder={pieceDescription}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/> 
          {/* <label className='category-form'>Style:
                <select onChange={handleStyle}className="selector">
                    <option></option>
                    {styles.map((s) => {
                        return <option key={s.id} value={s.id}>{s.name}</option>
                     
                    })}
                </select>    
        </label>
        <button className="add-new-style-piece" onClick={(e) => setStyleClick(!styleClick) }> 
            <BsPlusCircle/> 
        </button> */}

        <br/>
        <div className="add-piece-btn">
          <button className="btn" type='submit'>Add Piece</button>
        </div>

        </form>

        {/* <input type="file" accept="image/*" multiple={false} onChange={onImageChange} /> */}
    </div>
  )   
}


export default PieceEditForm
