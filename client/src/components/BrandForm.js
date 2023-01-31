import React, {useState} from 'react'
import {brandAdded} from "../redux/brandsSlice";
import { useSelector, useDispatch } from "react-redux";
import DisplayErrors from './DisplayErrors';
import '../App.css'

function BrandForm({showBrandForm, setShowBrandForm }) {
    const [name, setName] = useState("")
    const [headQuarters, setHeadQuarters] = useState("")
    const [logoUrl, setLogoUrl] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)
    const dispatch = useDispatch();

    function handleSubmit(e){
        
        e.preventDefault() 
        
        
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
                setShowBrandForm(!showBrandForm)
                dispatch(brandAdded(b))
                
              })
            } else {
              r.json().then((err) => setErrors(err.errors), setShowErrors(true), setShowBrandForm(true) );
            }
          });
    }

    let errorMsg = errors.map((e) => {
      return <DisplayErrors key={e[0]} error={e} />
    })


  return (
    <div className="brand-form-container">
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className='brand-form-label'></label>
          <input
            type='text'
            autoComplete="off"
            className="form-inputs"
            placeholder="Brand Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
        <label className='brand-form-label'></label>
          <input
            type='text'
            className="form-inputs"
            placeholder="Head Quarters..."
            value={headQuarters}
            onChange={(e) => setHeadQuarters(e.target.value)}
           ></input>
          <br/>
          <label className='brand-form-label'></label>
          <input
            type='text'
            className="form-inputs"
            placeholder="Logo URL..."
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
           ></input>
          <br/>
          <label className='brand-form-label'></label>
          <textarea
            type='text'
            className="form-inputs"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/>
          {showErrors ? (errorMsg) : (null)}
          <div className="add-brand-btn">
          <button className="btn" type='submit'>Add Brand</button>
          </div>

        </form>
        </div>
    </div>
  )
}

export default BrandForm