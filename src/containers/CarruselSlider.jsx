import React, { useState } from 'react'
import './CarruselSlider.css'
const PARTIDOS = [
    {
        equipo_local: 'Central Larroque',
        equipo_local_short: 'CCL',
        gol_local: 2,
        gol_visita: 0,
        equipo_visita: 'Sportivo Larroque',
        equipo_visita_short: 'CSL',
        escudo_local: 'https://antoninosartori.github.io/coder-project/img/escudos/deportivo_urd.svg',
        escudo_visita: 'https://antoninosartori.github.io/coder-project/img/escudos/juv_urd.svg'
    },
    {
        equipo_local: 'Central Larroque',
        equipo_local_short: 'CCL',
        gol_local: 0,
        gol_visita: 0,
        equipo_visita: 'Sportivo Larroque',
        equipo_visita_short: 'CSL',
        escudo_local: 'https://antoninosartori.github.io/coder-project/img/escudos/camioneros.svg',
        escudo_visita: 'https://antoninosartori.github.io/coder-project/img/escudos/sportivo_larroque.svg'
    },
    {
        equipo_local: 'Central Larroque',
        equipo_local_short: 'CCL',
        gol_local: 2,
        gol_visita: 3,
        equipo_visita: 'Sportivo Larroque',
        equipo_visita_short: 'CSL',
        escudo_local: 'https://antoninosartori.github.io/coder-project/img/escudos/deportivo_urd.svg',
        escudo_visita: 'https://antoninosartori.github.io/coder-project/img/escudos/juv_urd.svg'
    }
]

const CarruselSlider = () => {
    return(
        <section>
            <button>mas partidos</button> {/* crear componente para todos los botones */}
        
            {/* componente CarruselItem */}
            <div className="carrusel-container">
                {  
                
                    PARTIDOS.map(partido => {
                        return(
                            <article>
                                
                            </article>
                        )
                    })

                }
            </div>
        
        </section>
    )
}

export default CarruselSlider
