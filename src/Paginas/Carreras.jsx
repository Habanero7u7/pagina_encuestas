import React from 'react';

const Carreras = ({ datos, setDatos, opcionesFiltradas, setOpcionesFiltradas }) => {
    const handleChange = (event) => {
        const carreraSeleccionada = event.target.value;

        setDatos((prev) => ({
            ...prev,
            carrera: carreraSeleccionada,
            turno: '',
        }));

        const carrera = opcionesFiltradas.carreras.find((c) => c.nombre === carreraSeleccionada);

        const turnos = carrera ? carrera.turnos : [];

        setOpcionesFiltradas((prev) => ({
            ...prev,
            turnos,
        }));
    };

    return (
        <div>
            <form action="#" id="carreras">
                <label htmlFor="carrera">Selecciona tu Carrera</label>
                <select
                    name="carreras"
                    id="carrera"
                    onChange={handleChange}
                    disabled={!opcionesFiltradas.carreras.length}
                >
                    <option value="">Seleccione una carrera</option>
                    {opcionesFiltradas.carreras.map((carrera, index) => (
                        <option key={index} value={carrera.nombre}>
                            {carrera.nombre}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Carreras;
