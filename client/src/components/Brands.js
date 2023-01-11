import React, {useState, useEffect} from 'react'
import BrandForm from './BrandForm'
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../redux/brandsSlice";
import DisplayBrands from './DisplayBrands'


function Brands() {

    const [showBrandForm, setShowBrandForm] = useState(false)
    const dispatch = useDispatch();

    function handleBrandClick(e){
        e.preventDefault()
        setShowBrandForm(!showBrandForm)
    }

    useEffect(() => {
        dispatch(fetchBrands());
      }, [dispatch]);
    

    const brands = useSelector((state) => state.brands.entities);

    console.log(brands)


  return (
    <div>
        <div className="add-brand-btn">
            <button onClick={handleBrandClick} className="btn">Add New Brand</button>
        </div>
        {showBrandForm ? (<BrandForm showBrandForm={showBrandForm} setShowBrandForm={setShowBrandForm}/>) : (null)}
        <div>
            <DisplayBrands brands={brands}/>
        </div>


    </div>
  )
}


export default Brands 