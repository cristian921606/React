import React, { useState, useEffect } from "react";
import { dataCarrera } from "../../utils/dataCarrera";
import ListarCarrera from "./ListarCarrera";

function Carrera() {
  const [openFormulario, setOpenFormulario] = useState(false);
  const [listaCarrera, setListaCarrera] = useState([]);

  const [state, setState] = useState(templateForm());

  // boton para
  function setBtnEditar(tablaFilaCarrera) {
    setOpenFormulario(true);
    setState(tablaFilaCarrera);
  }

  // Boton para eliminar carrera
  function btnEliminar(idCarrera) {
    console.log("Eliminar id_carrera: ", typeof idCarrera, idCarrera);
  }

  // Boton para crear usuario o actualizar si existe id_carrera
  function btnUpsert(event) {
    // evita que se refresque la pantalla cuando se da click al boton crear/actualizar
    event.preventDefault();
    console.log(state);

    // logica para diferenciar si es crear o actualizar
    if (state.id_carrera) {
      // Codigo para actualizar carrera con api
      console.log("Logica para actualizar id_carrera: ", state.id_carrera);
    } else {
      // Codigo para crear carrera con api
      console.log("Logica para crear carrera con api, no hay id_carrera");
    }

    // refrescar tabla de carreras
    // code

    setState(templateForm()); //limpiar formulario
  }

  // handler/funcio  para obtener datos los inputs del formulario
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  // abrir/cerrar formulario
  function btnNuevo() {
    setState(templateForm());
    setOpenFormulario(true);
  }

  useEffect(() => {
    // Ver que data tengo en mi estado
    // console.log(state);
    setListaCarrera(dataCarrera);
  }, [state]);

  return (
    <>
      <br />
      <div className="text-center">
        <h2>Gestionar Carreras</h2>
      </div>
      <div className="d-flex justify-content-between">
        <h3>Listado de Carreras</h3>
        <button className="btn btn-success" onClick={btnNuevo}>
          Nuevo
        </button>
      </div>

      <hr />
      {openFormulario && (
        <>
          <div className="d-flex justify-content-center">
            <h4> {state.id_carrera === "" ? "Crear" : "Actualizar"} Carrera</h4>
          </div>
          <form className="d-flex justify-content-center" onSubmit={btnUpsert}>
            <table>
              <tbody>
                <tr className="text-end">
                  <th scope="col">Nombre:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="nombre"
                      placeholder="Desarrollo de Sistemas "
                      onChange={handleChange}
                      value={state.nombre}
                      required
                    />
                  </td>
                </tr>

                <tr className="text-end">
                  <th scope="col">Area:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="area"
                      placeholder="Tecnología"
                      onChange={handleChange}
                      value={state.area}
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th className="text-end" scope="col">
                    Descripcion:
                  </th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="descripcion"
                      placeholder="Descripción"
                      onChange={handleChange}
                      value={state.descripcion}
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th scope="col">Duracion:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="duracion"
                      placeholder="Telefono"
                      onChange={handleChange}
                      value={state.duracion}
                      maxLength="9"
                      required
                    />
                  </td>
                </tr>
                <tr className="text-center">
                  <td colSpan="2">
                    <button
                      type="button"
                      onClick={() => setOpenFormulario(false)}
                      className="btn btn-secondary mt-3"
                    >
                      Cerrar
                    </button>{" "}
                    <button className="btn btn-success  mt-3">
                      {state.id_carrera === "" ? "Crear" : "Actualizar"}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </>
      )}
      <br />
      <ListarCarrera
        dataCarrera={listaCarrera}
        setBtnEditar={setBtnEditar}
        btnEliminar={btnEliminar}
      />
      <br />
    </>
  );
}

function templateForm() {
  return {
    id_carrera: "",
    nombre: "",
    area: "",
    descripcion: "",
    duracion: "",
  };
}

export default Carrera;
