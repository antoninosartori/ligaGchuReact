import React, { useEffect, useState } from 'react'
import NewItem from '../components/NewItem'
import './NewsSection.css'
import { getDataFromApi } from '../assets/utils/getDataFromApi'

const NewsSection = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const endpoint = 'noticias'
        getDataFromApi(endpoint).then(setNews)
    }, []) 

    return (
        
        <section className='noticias-container'>
            
            <div className='noticia-izq'>
                {news?.filter(item => item.isPortada === 'TRUE').map(noticia => {
                    return(
                        < NewItem 
                            key={noticia.id}
                            title={noticia.titulo}
                            body={noticia.parrafo}
                            imgPath={noticia.imgPath}
                            />
                    )
                })}
            </div>
            <div className='noticias-der'>
                {news?.filter(item => item.isPortada === 'FALSE').map(noticia => {
                    return(
                        < NewItem 
                            key={noticia.id}
                            title={noticia.titulo}
                            imgPath={noticia.imgPath}
                            />
                    )
                })}
            </div>
        </section>
    )
}

export default NewsSection