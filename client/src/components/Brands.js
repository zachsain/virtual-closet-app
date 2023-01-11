import React, {useState} from 'react'
import BrandForm from './BrandForm'

function Brands() {
    const [showBrandForm, setShowBrandForm] = useState(false)

    function handleBrandClick(e){
        e.preventDefault()
        setShowBrandForm(!showBrandForm)
    }
  return (
    <div>
        <div className="add-brand-btn">
            <button onClick={handleBrandClick} className="btn">Add New Brand</button>
        </div>
    </div>
  )
}


export default Brands 