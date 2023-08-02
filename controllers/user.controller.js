const UserController = {};

UserController.getItems = async (req, res) => {
  try {
    // Supongamos que tienes una lista de elementos en tu base de datos o en algún servicio
    const items = [
      { id: 1, name: "Item 1", description: "This is item 1" },
      { id: 2, name: "Item 2", description: "This is item 2" },
      { id: 3, name: "Item 3", description: "This is item 3" },
    ];

    // Enviamos el JSON como respuesta
    res.json(items);
  } catch (error) {
    // En caso de error, manejamos la excepción y enviamos una respuesta de error
    console.error("Error al obtener los elementos:", error);
    res.status(500).json({ error: "Hubo un problema al obtener los elementos" });
  }
};

module.exports = UserController;
