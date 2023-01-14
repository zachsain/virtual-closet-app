import React from 'react'
import StylesCard from './StylesCard'

function DisplayStyles({styles, showPieceClick, showPieces, setShowPieces}) {

   let styleCard = styles.map((s) => {
    return <StylesCard 
            styles={styles}
            key={s.id}
            id={s.id}
            name={s.name}
            photo={s.url_photo}
            description={s.description}
            piecesAttached={s.pieces}
            showPieceClick={showPieceClick}
            setShowPieces={setShowPieces}
            showPieces={showPieces}
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