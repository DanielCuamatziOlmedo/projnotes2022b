// Importando los tramos de rutas
import homeRouter from '../domains/home/homeRouter';
import projectRouter from '../domains/project/projectRouter';
import menuRouter from '../domains/menu/menuRouter';

// Funcion de enrutado principal
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  app.use('/menu', menuRouter);
  // Agregando enrutado de Project
  app.use('/project', projectRouter);
};

export default { addRoutes };
