import React from 'react'
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import StylesCard from './StylesCard';
import PieceCard from './PieceCard';
import '../App.css'


function DisplaySingleStyle() {
    const params = useParams();
    const styles = useSelector((state) => state.styles.entities)
    const user = useSelector((state) => state.user.entities)

    const style = styles.find((s) => s.id == params.id)
    console.log(style)

    const pieces = style.pieces.filter((p) => p.user_id === user.id )
    console.log(pieces)

    let pieceCollection = pieces.map((p) => {
        return <PieceCard 
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    size={p.size}
                    image={p.featured_image}
                    imageUrl={p.image_url}
                    description={p.notes}
                    id={p.id}
                    brandId={p.brand_id}
                />
    })
  return (
    <div className="single-style-container">
        <StylesCard 
            name={style.name}
            photo={style.url_photo}
            description={style.description}
            id={style.id}
            />
        <h4>My Pieces</h4>
        {pieceCollection}
     
    </div>
  )

}


export default DisplaySingleStyle