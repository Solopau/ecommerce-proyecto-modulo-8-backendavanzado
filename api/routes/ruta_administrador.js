import { express } from 'express';
import { controlador_administrador } from '../controller';

const router = express.Router ();

router.post('/administrador', controlador_administrador.createAdministrador);
router.put('/administrador', controlador_administrador.updateAdministrador);
router.delete('/administrador', controlador_administrador.deleteAdministrador);


export {router};