import React from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css';

function StylesCard({name, photo, description, id}) {
   const history = useHistory()
   
    function handleClick(e){
        history.push(`/styles/${id}`)
    }

  return (
    <div onClick={handleClick} className="style-card-container">
        <div className="style-card">
        <h3 className="style-name">{name}</h3>
        <img className="style-img" src={photo} alt="brand-image" />
        <p className="brand-description">{description}</p>
    </div>
</div>
  )
}

export default StylesCard