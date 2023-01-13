import React from 'react'
import StylesCard from './StylesCard'

function DisplayStyles({styles}) {

   let styleCard = styles.map((s) => {
    return <StylesCard 
            key={s.id}
            id={s.id}
            name={s.name}
            photo={s.url_photo}
            description={s.description}
            />
   })

  return (
    <div className="display-styles-container">
        <h3> Styles </h3>
        {styleCard}
    </div>
  )
}


export default DisplayStyles