import React from 'react'
import '../App.css';

function StylesCard({name, photo, description}) {

  return (
    <div className="style-card-container">
        <div className="style-card">
        <h3 className="style-name">{name}</h3>
        <img className="style-img" src={photo} alt="brand-image" />
        <p className="brand-description">{description}</p>
    </div>
</div>
  )
}

export default StylesCard