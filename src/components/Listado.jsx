import React from 'react';

export default function Listado({ data, setData, dataFilter, setDataFilter }) {

  function deleteColaborador(id) {
    const newData = [...data].filter((colaborador) => colaborador.id !== id);
    setData(newData);

    const newDataFilter = [...dataFilter].filter(
      (colaborador) => colaborador.id !== id
    );
    setDataFilter(newDataFilter);
  }

  const colaboradores = dataFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <i
          className="fa-solid fa-trash-can"
          onClick={() => deleteColaborador(colaborador.id)}
        ></i>
      </td>
    </tr>
  ));

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{colaboradores}</tbody>
      </table>
    </div>
  );
}
