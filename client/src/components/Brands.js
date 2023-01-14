import React, {useState, useEffect} from 'react'
import BrandForm from './BrandForm'
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";
import DisplayBrands from './DisplayBrands'


function Brands({}) {

    const [showBrandForm, setShowBrandForm] = useState(false)
    const [myBrandBtnClick, setMyBrandBtnClick] = useState(false)
    const [showPieceClick, setShowPieceClick] = useState(false)
    const dispatch = useDispatch();

    function handleBrandClick(e){
        e.preventDefault()
        setShowBrandForm(!showBrandForm)
    }

    // useEffect(() => {
    //     dispatch(fetchBrands());
    //   }, [dispatch]);
    

    const brands = useSelector((state) => state.brands.entities);
    const myBrands = useSelector((state) => state.user.entities)
    console.log(brands)

    function handleMyBrandClick(){
        setShowPieceClick(!showPieceClick)
        setMyBrandBtnClick(!myBrandBtnClick)
      }

  return (
    <div>
        <div className="add-brand-btn">
            <button onClick={handleBrandClick} className="btn">Add New Brand</button>
        </div>
        <div className="add-brand-btn">
            <button onClick={handleMyBrandClick} className="btn">See My Brands</button>
        </div>
        {showBrandForm ? 
            (<BrandForm showBrandForm={showBrandForm} setShowBrandForm={setShowBrandForm}/>) 
            : (null)}
        {myBrandBtnClick ? 
            ( <DisplayBrands brands={myBrands.brands} showPieceClick={showPieceClick}/>) 
            : 
            ( <DisplayBrands brands={brands} showPieceClick={showPieceClick}/>)}
        {/* <div>
            <DisplayBrands brands={brands}/>
        </div> */}


    </div>
  )
}


export default Brands 