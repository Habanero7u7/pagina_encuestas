import React from 'react';
import BtnEncuestas from './BtnEncuestas';
import Carreras from './Carreras';
import Header from './Header';
import Modalidad from './Modalidad';
import Planteles from './Planteles';
import Turno from './Turno';

const Inicio = ({ datos, setDatos, opcionesFiltradas, setOpcionesFiltradas }) => {
    return (
        <div>
            <Header />
            <Planteles
                datos={datos}
                setDatos={setDatos}
                setOpcionesFiltradas={setOpcionesFiltradas}
            />
            <Turno
                datos={datos}
                setDatos={setDatos}
                opcionesFiltradas={opcionesFiltradas}
            />
            <Modalidad
                datos={datos}
                setDatos={setDatos}
                opcionesFiltradas={opcionesFiltradas}
                setOpcionesFiltradas={setOpcionesFiltradas}
            />
            <Carreras
                datos={datos}
                setDatos={setDatos}
                opcionesFiltradas={opcionesFiltradas}
                setOpcionesFiltradas={setOpcionesFiltradas}
            />
            <BtnEncuestas
                datos={datos}/>
        </div>
    );
};

export default Inicio;
