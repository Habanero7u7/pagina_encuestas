import React from 'react'

const Turno = () => {
    return (
        <div>
            <form action="#" id="turno">
                <label for="lang">Selecciona tu Turno</label>
                <select name="turno" id="lang">
                    <option value="matutino">Matutino</option>
                    <option value="vespertino">Vespertino</option>
                </select>
            </form>
        </div>
    )
}

export default Turno