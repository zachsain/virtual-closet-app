import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function () {
    const user = useSelector((state) => state.user.entities)
  return (
    <div className="home-page">
        <h2 className="pages-header">Welcome To Virtual Closet</h2>
        <h3 className="instructions">Here you can keep track of all the clothes in your closet...</h3>
        <h4 className="instructions">What styles those clothes go best with...</h4>
        <h4 className="instructions">And all the brands you own...</h4>
        <h3 className="instructions">Start by adding clothes to your closet...</h3>
        <h4 className="instructions">If the brand isn't already on here, go ahead and create it on the brands page...</h4>
        <h4 className="instructions">If the style doesn't exist yet, do the same on the styles page...</h4>
        <h5 className="instructions">Happy Dressing!</h5>

        {/* <img className="style-img" src={user.featured_image} alt="piece-image" /> */}

    </div>
  )
}
