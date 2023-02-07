import React from 'react'
import './NewItem.css'

const NewItem = ({ title, body, imgPath }) => {
    return(
        <>
            <article className='noticia-article'>
                {title && <h2 className='noticia-titulo'> {title} </h2>}
                {body && <p className='noticia-parrafo'> {body} </p>}
                {imgPath && <img className='noticia-img' src={imgPath} alt={title} />}
            </article>
            
        </>
    )
}

export default NewItem