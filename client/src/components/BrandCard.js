import React, {useState, useEffect} from 'react'
import '../App.css';
import PieceCard from './PieceCard';
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import '../App.css'

function BrandCard({
    name, 
    headQuarters, 
    logo, 
    description, 
    id, 
    showPieceClick,
    myBrandBtnClick
    }) {
   
    const user = useSelector((state) => state.user.entities)
    const pieces = user.pieces.filter((p) => p.brand_id === id)
    const [piecesShow, setPiecesShow] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]); 

    useEffect(() => {
        setPiecesShow(false)
      }, [myBrandBtnClick]);
    
    const displayPiece = pieces.map((p) => {
        return <PieceCard 
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    size={p.size}
                    description={p.description}
                    image={p.featured_image}
                    id={p.id}
                    imageUrl={p.image_url}
                />
       })  
    

  return (
    <div className="card-container">
        <div>
        <div className="cards">
            <h2 className="card-name">{name}</h2>
            <h4 className="card-name">{headQuarters}</h4>
            <img className="style-img" src={logo} alt="brand-image" />
            <h3 className="card-description-header">About this brand:</h3>
            <p className="card-description">{description}</p>
            {showPieceClick ? 
                    (<div><button id="show-pieces-btn" className="btn" onClick={() => (setPiecesShow(!piecesShow))}>Show My Pieces</button> </div> ) : (null)}
                {piecesShow ? (displayPiece) : (null)}
        </div>
        </div>
    </div>
  )
}


export default BrandCard;