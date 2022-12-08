// Cargando las varibles de entorno

// Creando los action method

const menu = (req, res) => {
  // 1 generando el view-model
  const viewModel = {};
  // 2. Madamos a generar la vista con el Template Engine
  res.render('menu/menu', viewModel);
  // 2. Mandamos a generar la vista con el template engine
};
// exportando el controlador
export default { menu };
