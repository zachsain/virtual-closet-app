import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";
import { fetchStyles } from "../redux/stylesSlice";
import {brandAdded} from "../redux/brandsSlice";
import BrandForm from './BrandForm';
import StyleForm from './StyleForm';
import { BsPlusCircle } from "react-icons/bs";

function PieceForm() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [size, setSize] = useState("")
    const [image, setImage] = useState(null)
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

    useEffect(() => {
        dispatch(fetchBrands());
      }, [dispatch]);

      useEffect(() => {
        dispatch(fetchStyles());
      }, [dispatch]);

      function handleSubmit(e){
        console.log(e.target)
      }

      function handleBrand(e){
        setBrandId(e.target.value)
      }

      function handleStyle(e){
        setStyleId(e.target.value)
      }


  return (
    <div className="piece-form-container">
        <form onSubmit={handleSubmit}>
          <label className='portfolio-form-label'>Name:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="Sweater..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br/>
          <label className='category-form'>Brand:
                <select onChange={handleBrand}className="selector">
                    {brands.map((b) => {
                        return <option key={b.id} value={b.id}>{b.name}</option>
                     
                    })}
                </select>    
        </label>
        <button className="add-new-brand-piece" onClick={(e) => setBrandClick(!brandClick)}> 
            <BsPlusCircle/> 
        </button>
          <br />
          <label> Upload Phtoto:
            <input type="file" accept="image/*" multiple={false} onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <br/>
          <label className='portfolio-form-label'>Price:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="$100..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />

          <label className='portfolio-form-label'>Size:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="Medium..."
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></input>
          <br />

          <label className='portfolio-form-label'>Description of Piece:</label>
          <textarea
            type='text'
            placeholder="I think it'd go well with..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/> 
          <label className='category-form'>Style:
                <select onChange={handleStyle}className="selector">
                    {styles.map((s) => {
                        return <option key={s.id} value={s.id}>{s.name}</option>
                     
                    })}
                </select>    
        </label>
        <button className="add-new-style-piece" onClick={(e) => setStyleClick(!styleClick) }> 
            <BsPlusCircle/> 
        </button>
        <br/>
        <div className="add-piece-btn">
          <button className="btn" type='submit'>Add Piece</button>
          </div>

        </form>

        {/* <input type="file" accept="image/*" multiple={false} onChange={onImageChange} /> */}
    </div>
  )
}

export default PieceForm