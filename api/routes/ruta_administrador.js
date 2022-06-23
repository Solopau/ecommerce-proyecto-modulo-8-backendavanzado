import { Router } from 'express';
import { controlador_administrador } from '../controller/index.js';

const router = Router ();

router.post('/administrador', controlador_administrador.createAdministrador);
router.put('/administrador', controlador_administrador.updateAdministrador);
router.delete('/administrador', controlador_administrador.deleteAdministrador);


export {router};