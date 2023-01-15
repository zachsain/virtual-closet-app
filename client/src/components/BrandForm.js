import React, {useState} from 'react'
import {brandAdded} from "../redux/brandsSlice";
import { useSelector, useDispatch } from "react-redux";
import '../App.css'

function BrandForm({showBrandForm, setShowBrandForm }) {
    const [name, setName] = useState("")
    const [headQuarters, setHeadQuarters] = useState("")
    const [logoUrl, setLogoUrl] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();

    function handleSubmit(e){
        
        e.preventDefault() 
        setShowBrandForm(!showBrandForm)
        
        fetch("/brands", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'name' : name,
                'head_quarters' : headQuarters,
                'logo_url' : logoUrl,
                'description' :  description,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((b) =>{
                dispatch(brandAdded(b))
                
              })
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
    }

  return (
    <div className="brand-form-container">
        <form onSubmit={handleSubmit}>
          <label className='brand-form-label'>Brand Name:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="Brand Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
        <label className='brand-form-label'>Head Quarters:</label>
          <input
            type='text'
            placeholder="Head Quarters..."
            value={headQuarters}
            onChange={(e) => setHeadQuarters(e.target.value)}
           ></input>
          <br/>
          <label className='brand-form-label'>Logo:</label>
          <input
            type='text'
            placeholder="Logo URL..."
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
           ></input>
          <br/>
          <label className='brand-form-label'>Brand Desciption:</label>
          <textarea
            type='text'
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/>
          <div className="add-brand-btn">
          <button className="btn" type='submit'>Add Brand</button>
          </div>

        </form>
    </div>
  )
}

export default BrandForm