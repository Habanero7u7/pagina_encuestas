import React from 'react'

const Modalidad = () => {
    return (
        <div>
            <form action="#" id="modalidad">
                <label for="lang">Selecciona tu Modalidad</label>
                <select name="modalidades" id="lang">
                    <option value="cuatrimestral">Cuatrimestre</option>
                    <option value="maestria cuatrimestral">Maestria Cuatrimestre</option>
                    <option value="maestria 4x1">Maestria 4x1</option>
                    <option value="semestral">Semestre</option>
                    <option value="maestria semestral">Maestria Semestre</option>
                    <option value="sep semestral rh">SEP Semestral RH</option>
                    <option value="trimestral">Trimestre</option>
                </select>
            </form>
        </div>
    )
}

export default Modalidad