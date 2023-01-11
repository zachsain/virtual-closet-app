import React from 'react'
import BrandCard from './BrandCard'

function DisplayBrands({brands}) {

    let brandCard = brands.map((b) => {
     return   <BrandCard 
                key={b.id}
                name={b.name}
                headQuarters={b.head_quarters}
                logo={b.logo_url}
                description={b.description}
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