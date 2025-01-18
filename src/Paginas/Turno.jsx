import React from 'react';

const Turno = ({ datos, setDatos, opcionesFiltradas }) => {
    const handleChange = (event) => {
        const turnoSeleccionado = event.target.value;

        setDatos((prev) => ({
            ...prev,
            turno: turnoSeleccionado,
        }));
    };

    return (
        <div>
            <form action="#" id="turno">
                <label htmlFor="turno">Selecciona tu Turno</label>
                <select
                    name="turno"
                    id="turno"
                    onChange={handleChange}
                    disabled={!opcionesFiltradas.turnos.length}
                >
                    <option value="">Seleccione un turno</option>
                    {opcionesFiltradas.turnos.map((turno, index) => (
                        <option key={index} value={turno}>
                            {turno}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Turno;
