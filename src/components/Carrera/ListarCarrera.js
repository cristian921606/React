
function ListarCarrera({ dataCarrera, setBtnEditar, btnEliminar }) {

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Area</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Duracion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataCarrera &&
              dataCarrera.map((carrera, index) => (
                <tr key={index}>
                  <th scope="row">{carrera.id_carrera}</th>
                  <td>{carrera.nombre}</td>
                  <td>{carrera.area}</td>
                  <td>{carrera.descripcion}</td>
                  <td>{carrera.duracion}</td>
                  <td>
                    <button
                      onClick={() => setBtnEditar(carrera)}
                      className="btn btn-warning"
                    >
                      Editar
                    </button>{" "}
                    <button
                      onClick={() => btnEliminar(carrera.id_carrera)}
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

  export default ListarCarrera;
