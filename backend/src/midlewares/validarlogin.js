import  { check, validationResult }  from 'express-validator';

const validarLogin = [
  check('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Debe ser un email válido'),

  check('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),

  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
       res.status(400).json({ errores: errores.array() });
    }
    return next();
  }
];

export default validarLogin;



