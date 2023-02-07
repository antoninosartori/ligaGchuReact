import React, { useEffect, useState } from 'react'
import './Posiciones.css'
import GenericTitle from '../components/GenericTitle'
import Select from '../components/Select'

const tableHeader = [
    {name: 'pos'},
    {name: 'equipo'},
    {name: 'pts'},
    {name: 'pj'},
    {name: 'g'},
    {name: 'e'},
    {name: 'p'},
    {name: 'gf'},
    {name: 'gc'},
    {name: 'dif'},
]


const selectDivision = [
    {text: 'division a', value: 'posicionesA'},
    {text: 'division b', value: 'posicionesB'} 
]

const selectCategoria = [
    {text: 'primera', value: '1'},
    {text: 'sub20', value: '2'} 
]



const Posiciones = () => {
    const [ posiciones, setPosiciones ] = useState([])
    const [division, setDivision] = useState('posicionesA')
    const [categoria, setCategoria] = useState('1')

    const getPosiciones = async () => {
        try {
            const res = await fetch(`https://sheet.best/api/sheets/fdeada79-ae62-47d8-84dc-5e7ce2a355ae/tabs/${division}${categoria}`)
            const data = await res.json();
            setPosiciones(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosiciones()
    },[division, categoria])

    const selectChangeDivision = (event) => {
        const value = event.target.value
        setDivision(value)
    }

    const selectChangeCategoria = (event) => {
        const value = event.target.value
        setCategoria(value)
    }

    return(
        <main>
            <GenericTitle>Posiciones</GenericTitle>

            <section className='posiciones-container'>
                <form action="">
                    <Select
                        name={'division'}
                        options={selectDivision}
                        selectChange={selectChangeDivision}
                        />
                    <Select 
                        name={'categoria'}
                        options={selectCategoria}
                        selectChange={selectChangeCategoria}
                        />
                </form>

                <table>
                    <thead>
                        <tr>
                            {tableHeader.map( thead => {
                                return <th key={thead.name}> {thead.name} </th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !posiciones ? <h1>cargando</h1> :    
                                posiciones.map(item => {
                                    return(
                                        <tr key={item.nombre}>
                                            <td>{item.pos}</td>
                                            <td className='td-nombreEquipo'>
                                                <span></span>
                                                <span className='td-nombreEquipoLargo'> {item.nombre_largo} </span>
                                                <span className='td-nombreEquipoCorto'> {item.nombre_corto} </span>
                                            </td>
                                            <td>{item.pts}</td>
                                            <td>{item.pj}</td>
                                            <td>{item.pg}</td>
                                            <td>{item.pe}</td>
                                            <td>{item.pp}</td>
                                            <td>{item.gf}</td>
                                            <td>{item.gc}</td>
                                            <td>{item.dif}</td>
                                        </tr>
                                    )
                                })}
                    </tbody>
                </table>

            </section>



        </main>
    )
}

export default Posiciones