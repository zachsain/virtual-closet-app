import React from 'react'
import StylesCard from './StylesCard'
import '../App.css'

function DisplayStyles({
          styles, 
          showPieceClick, 
          showPieces, 
          setShowPieces,
          myStyleBtnClick
      }) {

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
            myStyleBtnClick={myStyleBtnClick} 
            />
   })

  return (
    <div className="display-container">
        {styleCard}
    </div>
  )
}


export default DisplayStyles