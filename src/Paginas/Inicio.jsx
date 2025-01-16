import React from 'react'
import BtnEncuestas from './BtnEncuestas'
import Carreras from './Carreras'
import Header from './Header'
import Modalidad from './Modalidad'
import Planteles from './Planteles'
import Turno from './Turno'

const Inicio = () => {
    return (
        <div>
            <Header />
            <Planteles />
            <Modalidad />
            <Turno />
            <Carreras />
            <BtnEncuestas />
        </div>
    )
}

export default Inicio

