
function ListarAlumnno({ dataAlumno, setBtnEditar, btnEliminar }) {

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Dni</th>
            <th scope="col">Edad</th>
            <th scope="col">Id_Carrera</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {dataAlumno &&
            dataAlumno.map((alumno, index) => (
              <tr key={index}>
                <th scope="row">{alumno.id_alumno}</th>
                <td>{alumno.nombres}</td>
                <td>{alumno.apellidos}</td>
                <td>{alumno.email}</td>
                <td>{alumno.telefono}</td>
                <td>{alumno.dni}</td>
                <td>{alumno.edad}</td>
                <td>{alumno.id_carrera}</td>
                <td>
                  <button
                    onClick={() => setBtnEditar(alumno)}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>{" "}
                  <button
                    onClick={() => btnEliminar(alumno.id_alumno)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarAlumnno;
