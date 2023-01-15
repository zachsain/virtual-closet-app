import React from 'react'
import BrandCard from './BrandCard'
import '../App.css'

function DisplayBrands({brands, showPieceClick, setShowPieces, showPieces}) {

    let brandCard = brands.map((b) => {
     return   <BrandCard
                setShowPieces={setShowPieces} 
                showPieces={showPieces} 
                id={b.id}
                key={b.id}
                name={b.name}
                headQuarters={b.head_quarters}
                logo={b.logo_url}
                description={b.description}
                showPieceClick={showPieceClick}
            />
    })

  return (
    <div className="display-container">
        {brandCard}
    </div>
  )
}


export default DisplayBrands;