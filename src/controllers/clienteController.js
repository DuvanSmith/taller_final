import {
  createCliente,
  findAllClientes,
  findClienteById,
  updateCliente,
  destroyCliente,
  buscarCliente,
} from "../models/clienteModel.js";

// Crear cliente
const crearCliente = async (req, res) => {
  try {
    const resultado = await createCliente(req.body);
    res
      .status(201)
      .json({ message: "Cliente creado exitosamente", id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el cliente", error });
  }
};

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await findAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los clientes", error });
  }
};

// Obtener un cliente por su ID
const obtenerClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const resultados = await findClienteById(id);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

// Actualizar cliente
const actualizarCliente = async (req, res) => {
  try {
    await updateCliente(req.params.id, req.body);
    res.status(200).json({ message: "Cliente actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el cliente", error });
  }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
  try {
    await destroyCliente(req.params.id);
    res.status(200).json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el cliente", error });
  }
};

const obtenerClientePorDocumento = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const resultados = await buscarCliente(tipoDocumento, numeroDocumento);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

export {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
  obtenerClientePorDocumento,
};