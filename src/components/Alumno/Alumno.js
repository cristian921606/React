import React, { useState, useEffect } from "react";
import { dataAlumno } from "../../utils/dataAlumno";
import ListarAlumnno from "./ListarAlumnno";

function Alumno() {
  const [openFormulario, setOpenFormulario] = useState(false);
  const [listaAlumnos, setListaAlumnos] = useState([]);

  const [state, setState] = useState(templateForm());

  // boton para
  function setBtnEditar(tablaFilaAlumno) {
    setOpenFormulario(true);
    // limpiar texto del input de filtro
    tablaFilaAlumno.filtrar_x_carrera = ""
    // actualizar formulario con los datos seleccionados de la tabla
    setState(tablaFilaAlumno);
  }

  // Boton para eliminar alumno
  function btnEliminar(idAlumno) {
    console.log("Eliminar id_alumno: ", typeof idAlumno, idAlumno);
  }
  function btnFiltrar() {
    const filtrarByCarrera = state.filtrar_x_carrera;
    console.log(typeof filtrarByCarrera, filtrarByCarrera);
  }

  // Boton para crear usuario o actualizar si existe id_alumno
  function btnUpsert(event) {
    // evita que se refresque la pantalla cuando se da click al boton crear/actualizar
    event.preventDefault();
    console.log(state);

    // logica para diferenciar si es crear o actualizar
    if (state.id_alumno) {
      // Codigo para actualizar alumno con api
      console.log("Logica para actualizar id_alumno: ", state.id_alumno);
    } else {
      // Codigo para crear alumno con api
      console.log("Logica para crear alumno con api, no hay id_alumno");
    }

    // refrescar tabla de alumnos
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
    console.log(state);
    setListaAlumnos(dataAlumno);
  }, [state]);

  return (
    <>
      <br />
      <div className="text-center">
        <h2>Gestionar Alumnos</h2>
      </div>
      <div>
        <h3>Listado de Alumnos</h3>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <input
              className="form-control"
              name="filtrar_x_carrera"
              placeholder="Filtrar por carrera"
              onChange={handleChange}
              value={state.filtrar_x_carrera}
              required
            />
            <button
              type="button"
              className="btn btn-info text-white"
              onClick={btnFiltrar}
            >
              Filtrar
            </button>
          </div>
          <button type="button" className="btn btn-success" onClick={btnNuevo}>
            Nuevo
          </button>
        </div>
      </div>

      <hr />
      {openFormulario && (
        <>
          <div className="d-flex justify-content-center">
            <h4> {state.id_alumno === "" ? "Crear" : "Actualizar"} Alumno</h4>
          </div>
          <form className="d-flex justify-content-center" onSubmit={btnUpsert}>
            <table>
              <tbody>
                <tr className="text-end">
                  <th scope="col">Nombres:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="nombres"
                      placeholder="Nombres"
                      onChange={handleChange}
                      value={state.nombres}
                      required
                    />
                  </td>
                </tr>

                <tr className="text-end">
                  <th scope="col">Apellidos:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="apellidos"
                      placeholder="Apellidos"
                      onChange={handleChange}
                      value={state.apellidos}
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th className="text-end" scope="col">
                    Email:
                  </th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={state.email}
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th scope="col">Telefono:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="telefono"
                      placeholder="Telefono"
                      onChange={handleChange}
                      value={state.telefono}
                      maxLength="9"
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th scope="col">DNI:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="dni"
                      placeholder="Dni"
                      onChange={handleChange}
                      value={state.dni}
                      maxLength="8"
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th scope="col">Edad:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="edad"
                      placeholder="Edad"
                      onChange={handleChange}
                      value={state.edad}
                      maxLength="2"
                      required
                    />
                  </td>
                </tr>
                <tr className="text-end">
                  <th scope="col">Carrera_id:</th>
                  <td scope="col">
                    <input
                      className="form-control"
                      name="id_carrera"
                      placeholder="Carrera_id"
                      onChange={handleChange}
                      value={state.id_carrera}
                      maxLength="4"
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
                      {state.id_alumno === "" ? "Crear" : "Actualizar"}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </>
      )}
      <br />
      <ListarAlumnno
        dataAlumno={listaAlumnos}
        setBtnEditar={setBtnEditar}
        btnEliminar={btnEliminar}
      />
      <br />
    </>
  );
}

function templateForm() {
  return {
    id_alumno: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    dni: "",
    edad: "",
    id_carrera: "",
    filtrar_x_carrera: "",
  };
}

export default Alumno;
