import React, {useState} from 'react'


function BrandForm() {
    const [name, setName] = useState("")
    const [headQuarters, setHeadQuarters] = useState("")
    const [logoUrl, setLogoUrl] = useState("")
    const [description, setDescription] = useState("")


    function handleSubmit(e){
        fetch("/portfolios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((p) =>{
                console.log(p)
              })
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
    }

  return (
    <div className="brand-form-container">
        <form onSubmit={handleSubmit}>
          <label className='portfolio-form-label'>Brand Name:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="Brand Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
        <label className='portfolio-form-label'>Head Quarters:</label>
          <input
            type='text'
            placeholder="Head Quarters..."
            value={headQuarters}
            onChange={(e) => setHeadQuarters(e.target.value)}
           ></input>
          <br/>
          <label className='portfolio-form-label'>Logo:</label>
          <input
            type='text'
            placeholder="Logo URL..."
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
           ></input>
          <br/>
          <label className='portfolio-form-label'>Brand Desciption:</label>
          <textarea
            type='text'
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <br/>
          <div className="add-brand-btn">
          <button className="btn" type='submit'>Add Brand</button>
          </div>

        </form>
    </div>
  )
}

export default BrandForm