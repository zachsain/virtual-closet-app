import React from 'react'
import BrandCard from './BrandCard'

function DisplayBrands({brands, showPieceClick}) {

    let brandCard = brands.map((b) => {
     return   <BrandCard
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
    <div className="display-brands-container">
        <h1 className="brands-header"> Brands </h1>
        {brandCard}
    </div>
  )
}


export default DisplayBrands;