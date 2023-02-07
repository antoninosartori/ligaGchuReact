import React, { useEffect, useState } from 'react'
import NewItem from '../components/NewItem'
import './NewsSection.css'

const NewsSection = () => {
    const [news, setNews] = useState([])

    const getNews = async () => {
        try {
            const res = await fetch("https://sheet.best/api/sheets/fdeada79-ae62-47d8-84dc-5e7ce2a355ae?_format=records")
            const data = await res.json();
            setNews(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNews()
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