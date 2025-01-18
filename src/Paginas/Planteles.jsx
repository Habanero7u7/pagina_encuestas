import React from 'react';

const Planteles = ({ datos, setDatos, setOpcionesFiltradas }) => {
    const handleChange = (event) => {
        const plantelSeleccionado = event.target.value;

        setDatos((prev) => ({
            ...prev,
            plantel: plantelSeleccionado,
            turno: '',
            modalidad: '',
            carrera: '',
        }));

        const opcionesPorPlantel = {
            americas: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Maestria_Cuatrimestral', 'Maestrias_4x1', 'Semestral', 'Maestria_Semestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN Y LIDERAZGO EMPRESARIAL 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN ARQUITECTURA 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN DERECHO', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN DERECHO 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN DISEÑO DE ANIMACIÓN 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN GASTRONOMÍA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN GASTRONOMÍA Y GESTIÓN RESTAURANTERA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Vespertino'] }
                    ],
                    Maestria_Cuatrimestral: [
                        { nombre: 'MAESTRÍA EN ALTA DIRECCIÓN', turnos: ['Matutino'] },
                        { nombre: 'MAESTRÍA EN DESARROLLO ORGANIZACIONAL', turnos: ['Matutino'] },
                        { nombre: 'MAESTRÍA EN PLANEACIÓN FISCAL CORPORATIVA', turnos: ['Matutino'] }
                    ],
                    Maestrias_4x1: [
                        { nombre: 'MAESTRÍA EN ADMINISTRACIÓN Y LIDERAZGO 4x1', turnos: ['Matutino'] },
                        { nombre: 'MAESTRÍA EN DERECHO FISCAL 4x1', turnos: ['Matutino'] },
                        { nombre: 'MAESTRÍA EN EDUCACIÓN 4x1', turnos: ['Matutino'] },
                        { nombre: 'MAESTRÍA EN GESTIÓN AMBIENTAL 4x1', turnos: ['Matutino'] },
                        { nombre: 'MAESTRÍA EN PLANEACIÓN FISCAL CORPORATIVA 4x1', turnos: ['Matutino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'CARRERA DE ABOGADO', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN ARQUITECTURA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN DISEÑO DE INTERIORES Y AMBIENTACIÓN', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN DISEÑO DE MODAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN DISEÑO PARA LA COMUNICACIÓN GRÁFICA', turnos: ['Matutino', 'Vespertino'] }
                    ],
                    Maestria_Semestral: [
                        { nombre: 'MAESTRIA EN DOCENCIA', turnos: ['Matutino'] }
                    ],
                },
            },
            campus: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Semestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN Y LIDERAZGO EMPRESARIAL 7x2', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN CIENCIAS FORENSES: CRIMINALISTICA Y CRIMINOLOGIA', turnos: ['Matutino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN CIRUJANO DENTISTA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA 7x2', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN DERECHO 7x2', turnos: ['Matutino','Vespertino'] },
                        { nombre: 'LICENCIATURA EN ENFERMERÍA', turnos: ['Vespertino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN ENFERMERÍA INTERNACIONAL', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA', turnos: ['Matutino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA 7x2', turnos: ['Matutino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES 7x2', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Matutino', 'Vespertino', 'Nocturno'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN CULTURA FÍSICA Y DEPORTES', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN NUTRICIÓN', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN PSICOLOGÍA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN QUÍMICO FARMACÉUTICO BIÓLOGO', turnos: ['Matutino', 'Vespertino'] }
                    ],
                },
            },
            lazaro_cardenas: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Semestral', 'Trimestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN Y LIDERAZGO EMPRESARIAL 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN CIENCIAS FORENSES: CRIMINALISTICA Y CRIMINOLOGIA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA 7x2', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN DERECHO', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN DERECHO 7x2', turnos: ['Matutino','Vespertino'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES 7x2', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Matutino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'CARRERA DE ABOGADO', turnos: ['Matutino', 'Vespertino'] }
                    ],
                    Trimestral: [
                        { nombre: 'BACHILLERATO INTENSIVO SEMIESCOLARIZADO', turnos: ['Matutino', 'Vespertino'] }
                    ],
                },
            },
            olimpica: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Semestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN INGENIERÍA EN COMPUTACION SEP', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN INGENIERÍA EN DESARROLLO DE SOFTWARE 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN INGENIERÍA EN MECATRÓNICA 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN INGENIERÍA EN SISTEMAS - 24B OL - 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN INGENIERÍA INDUSTRIAL EN PRODUCCIÓN 7x2', turnos: ['Vespertino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN INGENIERIA CIVIL', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN INGENIERIA EN COMPUTACIÓN', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN INGENIERIA EN COMUNICACIONES Y ELECTRONICA ', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN INGENIERIA INDUSTRIAL', turnos: ['Matutino', 'Vespertino'] }
                    ],
                },
            },
            pedro_moreno: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Semestral', 'Trimestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN GASTRONOMÍA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN GASTRONOMÍA Y GESTIÓN RESTAURANTERA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Vespertino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN TRABAJO SOCIAL', turnos: ['Matutino'] }
                    ],
                    Trimestral: [
                        { nombre: 'BACHILLERATO INTENSIVO SEMIESCOLARIZADO', turnos: ['Matutino', 'Vespertino', 'Nocturno'] }
                    ],
                },
            },
            rio_nilo: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Semestral', 'Trimestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN Y LIDERAZGO EMPRESARIAL 7x2', turnos: ['Matutino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN CIENCIAS FORENSES: CRIMINALISTICA Y CRIMINOLOGIA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA 7x2', turnos: ['Matutino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN DERECHO', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN DERECHO 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN GASTRONOMÍA Y GESTIÓN RESTAURANTERA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Matutino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA ', turnos: ['Matutino'] }
                    ],
                    Trimestral: [
                        { nombre: 'BACHILLERATO INTENSIVO SEMIESCOLARIZADO', turnos: ['Matutino', 'Vespertino', 'Noctuno'] }
                    ],
                },
            },
            tlajomulco: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Maestrias_4x1', 'Semestral', 'Trimestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN Y LIDERAZGO EMPRESARIAL 7x2', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN CIENCIAS FORENSES: CRIMINALISTICA Y CRIMINOLOGIA', turnos: ['Matutino', 'Noctuno'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA 7x2', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN DERECHO', turnos: ['Matutino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN DERECHO 7x2', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN INGENIERÍA INDUSTRIAL EN PRODUCCIÓN 7x2', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES 7x2', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Matutino'] }
                    ],
                    Maestrias_4x1: [
                        { nombre: 'MAESTRÍA EN DERECHO FISCAL 4x1', turnos: ['Matutino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN PSICOLOGÍA', turnos: ['Matutino', 'Vespertino'] }
                    ],
                    Trimestral: [
                        { nombre: 'BACHILLERATO INTENSIVO SEMIESCOLARIZADO', turnos: ['Matutino', 'Vespertino', 'Noctuno'] }
                    ],
                },
            },
            zapopan: {
                turnos: ['Matutino', 'Vespertino', 'Nocturno'],
                modalidades: ['Cuatrimestral', 'Semestral', 'SEP_Semestral_RH', 'Trimestral'],
                carrerasPorModalidad: {
                    Cuatrimestral: [
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN Y LIDERAZGO EMPRESARIAL 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN CIENCIAS FORENSES: CRIMINALISTICA Y CRIMINOLOGIA', turnos: ['Matutino', 'Noctuno'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA 7x2', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', turnos: ['Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN DERECHO', turnos: ['Vespertino'] },
                        { nombre: 'LICENCIATURA EN DERECHO 7x2', turnos: ['Matutino', 'Vespertino', 'Nocturno'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN MERCADOTECNIA 7x2', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN NEGOCIOS INTERNACIONALES 7x2', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN PEDAGOGÍA 7x2', turnos: ['Matutino'] }
                    ],
                    Semestral: [
                        { nombre: 'BACHILLERATO GENERAL POR COMPETENCIAS', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'CARRERA DE ABOGADO', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN ADMINISTRACIÓN', turnos: ['Matutino', 'Vespertino'] },
                        { nombre: 'LICENCIATURA EN CONTADURÍA PÚBLICA', turnos: ['Matutino'] },
                        { nombre: 'LICENCIATURA EN PSICOLOGÍA', turnos: ['Matutino', 'Vespertino'] }
                    ],
                    SEP_Semestral_RH: [
                        { nombre: 'LICENCIATURA EN GESTIÓN DE RECURSOS HUMANOS - ZAPOPAN', turnos: ['Matutino'] }
                    ],
                    Trimestral: [
                        { nombre: 'BACHILLERATO INTENSIVO SEMIESCOLARIZADO', turnos: ['Matutino', 'Vespertino'] }
                    ],
                },
            },
        };

        const plantelOpciones = opcionesPorPlantel[plantelSeleccionado] || {
            turnos: [],
            modalidades: [],
            carrerasPorModalidad: {},
        };

        setOpcionesFiltradas({
            turnos: plantelOpciones.turnos,
            modalidades: plantelOpciones.modalidades,
            carrerasPorModalidad: plantelOpciones.carrerasPorModalidad,
            carreras: [],
        });
    };

    return (
        <div>
            <form action="#" id="planteles">
                <label htmlFor="plantel">Selecciona tu Plantel</label>
                <select name="planteles" id="plantel" onChange={handleChange}>
                    <option value="">Seleccione un plantel</option>
                    <option value="americas">Américas</option>
                    <option value="campus">Campus</option>
                    <option value="lazaro_cardenas">Lázaro Cárdenas</option>
                    <option value="olimpica">Olímpica</option>
                    <option value="pedro_moreno">Pedro Moreno</option>
                    <option value="rio_nilo">Río Nilo</option>
                    <option value="tlajomulco">Tlajomulco</option>
                    <option value="zapopan">Zapopan</option>
                </select>
            </form>
        </div>
    );
};

export default Planteles;
