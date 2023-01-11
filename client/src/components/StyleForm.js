import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {styleAdded} from "../redux/stylesSlice";


function StyleForm({addStyleBtnClick, setAddStyleBtnClick }) {

    const [name, setName] = useState("")
    const [urlPhoto, setUrlPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()

    function handleSubmit(e){
        
        e.preventDefault() 
        setAddStyleBtnClick(!addStyleBtnClick)
        
        fetch("/styles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'name' : name,
                'url_photo' : urlPhoto,
                'description' :  description,
                'category' : category
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((s) =>{
                dispatch(styleAdded(s))
                
              })
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
    }

  return (
    <div className="style-form-container">
         <form onSubmit={handleSubmit}>
          <label className='portfolio-form-label'>Style Name:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="Style Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
        <label className='portfolio-form-label'>Exmample Photo:</label>
          <input
            type='text'
            placeholder="Paste URL..."
            value={urlPhoto}
            onChange={(e) => setUrlPhoto(e.target.value)}
           ></input>
          <br/>
          <label className='portfolio-form-label'>Style Desciption:</label>
          <textarea
            type='text'
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/>
          <label className='category-form'>Select Category:
                <select  onChange={(e) => setCategory(e.target.value)}className="selector">
                    <option value={null}></option>
                    <option value="Top">Top</option>
                    <option value="Bottom">Bottom</option>
                    <option value="Dress">Dress</option>
                    <option value="Skirt">Skirt</option>
                    <option value="Suit">Suit</option>
                    <option value="Jacket">Jacket</option>
                    <option value="Hat">Hat</option>
                    <option value="Shoe">Shoe</option>
                    <option value="Accessories">Accessories</option>
                </select>    
        </label> 
          <div className="add-style-btn">
          <button className="btn" type='submit'>Add Style</button>
          </div>

        </form>



    </div>
  )
}

export default StyleForm