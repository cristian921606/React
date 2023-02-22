// rsc
import React from 'react';

const TablaPagos = ({lista}) => {
    return (
        <div>
            <table className='table'>
                <thead> 
                    <tr>
                        <th>Fila</th>
                        <th>Codigo</th>
                        <th>Alumno</th>
                        <th>Especialidad</th>
                        <th>Semestre</th>
                        <th>Cant. Pagos</th>
                        <th>Suma. Pagos</th>
                    </tr> 
                </thead>
                <tbody> 
                    {
                        lista.map( (item, index)=>{
                            return <tr key={index}>
                                <td>{item.fila}</td>
                                <td>{item.codalumno}</td>
                                <td>{item.nombrecompleto}</td>
                                <td>{item.nomesp}</td>
                                <td>{item.semestre}</td>
                                <td>{item.cant_pagos}</td>
                                <td>{item.suma_pagos}</td>
                            </tr>
                        })

                    } 
                </tbody>
            </table>
        </div>
    );
};

export default TablaPagos;