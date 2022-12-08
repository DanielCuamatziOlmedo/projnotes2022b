// Importando el Router de express
import { Router } from 'express';
// Importando el controlador
import menuController from './menuController';
// creando una instancia de enrutador
const router = new Router();

// enrutamos
// get 'menu'
router.get('/menu', menuController.menu);

// exportando este tramo de ruta
export default router;
