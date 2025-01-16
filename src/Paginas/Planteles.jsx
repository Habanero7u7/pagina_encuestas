import React from 'react'

const Planteles = () => {
    return (
        <div>
            <form action="#" id="planteles">
                <label for="lang">Selecciona tu Plantel</label>
                <select name="planteles" id="lang">
                    <option value="americas">Americas</option>
                    <option value="campus">Campus</option>
                    <option value="lazaro cardenas">Lázaro Cardenas</option>
                    <option value="olimpica">Olimpica</option>
                    <option value="pedro moreno">Pedro Moreno</option>
                    <option value="rio nilo">Rio Nilo</option>
                    <option value="tlajomulco">Tlajomulco</option>
                    <option value="zapopan">Zapopan</option>
                </select>
            </form>
        </div>
    )
}

export default Planteles