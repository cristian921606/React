// rsc
import React, { useEffect, useState } from 'react';

const NotasPorAnio = () => {
    
    // variables de estado
    const [anio, setAnio] = useState(2019)
    const [lista, setLista] = useState([])
    
    // funcion para capturar la informacion del 
    // teclado y asignarlo a la variable anio
    // a traves de su metodo setAnio
    const handlerAnio =(e)=>{
        setAnio(e.target.value)
        //console.log(e.target.value)    
    }

    // función asincrona que devuelva los datos de un servicio
    const traerNotas = async(anio)=>{
        // ALT + 96 = `
        const consulta = 
        await fetch(`http://localhost:22410/api/Consultas/GETLISTAR_NOTAS_AÑO/${anio}`)
        // el resultado valor a convertirlo a json
        const datos = await consulta.json();
        // almacenando la información en json dentro de lista
        setLista(datos)
    }

    // permite que el codigo de su interior pueda ser ejecutado:
    // 1 vez o muchas veces dependiendo el valor de una(s) variable(s)
    useEffect( ()=>{
        // llamar a funciones o ejecutar codigo
        traerNotas(anio)
    }, [anio])

    return (
        <div>
            <h2>Consulta de Notas por Año</h2>
            <div>
                Año a Consultar: <input type="text" 
                                        name="anio"
                                        value={anio}
                                        onChange={handlerAnio}
                                        />
                <hr/>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Fila</th>
                            <th>Alumno</th>
                            <th>Curso</th>
                            <th>Trabajo</th>
                            <th>Parcial</th>
                            <th>Final</th>
                            <th>Promedio</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        lista.map( (item, index)=>{
                           return <tr key={index}>
                               <td>{item.fila}</td>
                               <td>{item.apealumno}</td>
                               <td>{item.nomcurso}</td>
                               <td>{item.ntrabajo}</td>
                               <td>{item.nparcial}</td>
                               <td>{item.nfinal}</td>
                               <td>{item.promedio}</td>
                           </tr>     
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NotasPorAnio;