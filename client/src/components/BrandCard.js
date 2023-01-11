import React from 'react'
import '../App.css';


function BrandCard({name, headQuarters, logo, description}) {
  return (
    <div className="brand-card-container">
        <div className="brand-card">
        <h3 className="brand-name">{name}</h3>
        <h4 className="brand-hq">{headQuarters}</h4>
        <img className="brand-img" src={logo} alt="brand-image" />
        <p className="brand-description">{description}</p>
        </div>
    </div>
  )
}


export default BrandCard;