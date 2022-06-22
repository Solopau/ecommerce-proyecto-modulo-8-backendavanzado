import { express } from 'express';
import { controlador_administrador } from '../controller';

const router = express.Router ();

router.post('/administrador', controlador_administrador.createAdministrador);
router.put('/administrador/:id', controlador_administrador.updateAdministrador);
router.delete('/administrador/:id', controlador_administrador.deleteAdministrador);


export {router};