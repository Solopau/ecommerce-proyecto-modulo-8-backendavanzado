import administrador from '../models/administrador.js';
import { administradorSchema } from '../models/index.js';

export const createAdministrador = async (req, res) => {
  const { administrador } = req.body;

  try {
    const newAdministrador = await administradorSchema.create(administrador);
    return res.json({
      msg: 'Administrador creado correctamente',
      data: newAdministrador,
    });
  } catch (error) {
    console.log (error)
    return res.status(500).json({
      msg: 'Error al crear usuario',
    });
  }
};

export const updateAdministrador = async (req, res) => {
    const { administrador } = req.body;
  
    try {
      const updateAdministrador = await administradorSchema.findByIdAndUpdate(administrador);
      return res.json({
        msg: 'Administrador actualizado correctamente',
        data: updateAdministrador,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al actualizar usuario',
      });
    }
  };

  export const deleteAdministrador = async (req, res) => {
    const { id } = req.body;
  
    try {
      const deleteAdministrador = await administradorSchema.findByIdAndDelete (administrador);
      return res.json({
        msg: 'Administrador eliminado correctamente',
        data: deleteAdministrador,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al eliminar usuario',
      });
    }
  };