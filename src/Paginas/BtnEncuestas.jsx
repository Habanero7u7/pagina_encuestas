import React from 'react';

const BtnEncuestas = ({ datos }) => {
    const handleClick = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Diccionario de enlaces para cada combinación de Plantel y Modalidad
        const encuestas = {
            americas: {
                'Maestria_4x1': 'https://forms.office.com/r/XXXXXXXXXX',
                'Maestria_Cuatrimestral': 'https://forms.office.com/r/NMqHDqaZrC', // Enlace de ejemplo
                'semestral': 'https://forms.office.com/r/YYYYYYYYYY', // Enlace de ejemplo
            },
            campus: {
                'maestria_4x1': 'https://forms.office.com/r/ZZZZZZZZZZ', // Enlace de ejemplo
                'semestral': 'https://forms.office.com/r/WWWWWWWWWW', // Enlace de ejemplo
            },
            // Agrega más planteles y modalidades aquí
        };

        // Obtener el enlace correspondiente al Plantel y Modalidad seleccionados
        const enlace = encuestas[datos.plantel]?.[datos.modalidad];

        if (enlace) {
            // Redirigir al enlace correspondiente
            window.location.href = enlace;
        } else {
            // Mostrar un mensaje si no se encuentra el enlace
            alert('No hay una encuesta disponible para esta combinación de plantel y modalidad.');
        }
    };

    return (
        <div>
            <form onSubmit={handleClick} id="btnEncuestas">
                <input type="submit" value="Continuar" />
            </form>
        </div>
    );
};

export default BtnEncuestas;
