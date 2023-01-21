import React, {useState, useEffect} from 'react'
import BrandForm from './BrandForm'
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";
import DisplayBrands from './DisplayBrands'
import '../App.css'


function Brands({}) {

    const [showBrandForm, setShowBrandForm] = useState(false)
    const [myBrandBtnClick, setMyBrandBtnClick] = useState(false)
    const [showPieceClick, setShowPieceClick] = useState(false)
    const [showPieces, setShowPieces] = useState(false)
    const dispatch = useDispatch();

    function handleBrandClick(e){
        e.preventDefault()
        setShowBrandForm(!showBrandForm)
    }

    const brands = useSelector((state) => state.brands.entities);
    const myBrands = useSelector((state) => state.user.entities)
    
    function handleMyBrandClick(){
        setShowPieces(false)
        setShowPieceClick(!showPieceClick)
        setMyBrandBtnClick(!myBrandBtnClick)
      }

  return (
    <div className="styles-page-container">
        <h1 className="pages-header"> BRANDS </h1>
        <div className="add-brand-btn">
            <button  id="add-styles-btn" onClick={handleBrandClick} data-inline="true"  className="btn">Add New Brand</button>
            {myBrandBtnClick ? ( <button id="my-styles-btn" data-inline="true" onClick={handleMyBrandClick} className="btn">All Brands</button>) 
            : (<button id="my-styles-btn" data-inline="true" onClick={handleMyBrandClick} className="btn">See My Brands</button>)}
            {/* <button id="my-styles-btn" onClick={handleMyBrandClick} data-inline="true"  className="btn">See My Brands</button> */}
        </div>
        {showBrandForm ? 
            (<BrandForm showBrandForm={showBrandForm} setShowBrandForm={setShowBrandForm}/>) 
            : (null)}
        {myBrandBtnClick ? 
            ( <DisplayBrands myBrandBtnClick={myBrandBtnClick} brands={myBrands.brands} showPieceClick={showPieceClick}/>) 
            : 
            ( <DisplayBrands  brands={brands} showPieceClick={showPieceClick}/>)}
        {/* <div>
            <DisplayBrands brands={brands}/>
        </div> */}


    </div>
  )
}


export default Brands 