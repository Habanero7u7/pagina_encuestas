import React from 'react';

const Modalidad = ({ datos, setDatos, opcionesFiltradas, setOpcionesFiltradas }) => {
    const handleChange = (event) => {
        const modalidadSeleccionada = event.target.value;

        setDatos((prev) => ({
            ...prev,
            modalidad: modalidadSeleccionada,
            carrera: '',
            turno: '',
        }));

        const carreras = opcionesFiltradas.carrerasPorModalidad
            ? opcionesFiltradas.carrerasPorModalidad[modalidadSeleccionada] || []
            : [];

        setOpcionesFiltradas((prev) => ({
            ...prev,
            carreras,
            turnos: [],
        }));
    };

    return (
        <div>
            <form action="#" id="modalidad">
                <label htmlFor="modalidad">Selecciona tu Modalidad</label>
                <select
                    name="modalidades"
                    id="modalidad"
                    onChange={handleChange}
                    disabled={!opcionesFiltradas.modalidades.length}
                >
                    <option value="">Seleccione una modalidad</option>
                    {opcionesFiltradas.modalidades.map((modalidad, index) => (
                        <option key={index} value={modalidad}>
                            {modalidad}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Modalidad;
