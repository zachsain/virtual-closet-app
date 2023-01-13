import React from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css';

function StylesCard({name, photo, description, id}) {
   const history = useHistory()
   
    function handleStyleClick(e){
        history.push(`/styles/${id}`)
    }

  return (
    <div onClick={handleStyleClick} className="style-card-container">
        <div > 
            <div className="style-card">
            <h3 className="style-name">{name}</h3>
            <img className="style-img" src={photo} alt="brand-image" />
            <p className="brand-description">{description}</p>
        </div>
    </div>
</div>
  )
}

export default StylesCard