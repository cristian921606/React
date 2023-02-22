import React, { useEffect, useState } from 'react';
//
import TablaPagos from './TablaPagos';

const PagosPorSemestre = () => {

    const [entrada1, setEntrada1] = useState('2018-1')
    const [entrada2, setEntrada2] = useState('2018-1')
    //
    const [semestre1, setSemestre1] = useState('2018-1')
    const [semestre2, setSemestre2] = useState('2018-1')
    const [lista, setLista] = useState([])

    const handlerEntrada1 =(e)=>{
        setEntrada1(e.target.value)
    }

    const handlerEntrada2 =(e)=>{
        setEntrada2(e.target.value)
    }

    // método que será usado por el botón
    const consultar = ()=>{
        setSemestre1(entrada1)
        setSemestre2(entrada2)
        //console.log(entrada1)
        //console.log(entrada2)
    }

    // función asincrona que devuelva los datos de un servicio
    const traerPagos = async(semestre1, semestre2)=>{
        // ALT + 96 = `
        const consulta = 
        await fetch(`http://localhost:22410/api/Consultas/LISTAR_PAGOS_SEMESTRE/${semestre1}/${semestre2}`)
        // el resultado valor a convertirlo a json
        const datos = await consulta.json();
        // almacenando la información en json dentro de lista
        setLista(datos)
    }

    useEffect( ()=>{
        //
        traerPagos(semestre1, semestre2)

    },[semestre1, semestre2] )


    return (
        <div>
            <h2>Consulta de Pagos por Rango de Semestres</h2>        
            <div className='container'>
                Semestre 1: <input type="text" 
                                   name="semestre1"
                                   value={entrada1}
                                   onChange={handlerEntrada1}  />
                <br/>
                Semestre 2: <input type="text"
                                   name="semestre2"
                                   value={entrada2}
                                   onChange={handlerEntrada2}
                />
                <br/>
                <button className='btn btn-info' 
                        onClick={consultar}  >Consultar</button>
            </div>
            <hr/>
            <TablaPagos lista = {lista} />
        </div>
    );
};

export default PagosPorSemestre;

