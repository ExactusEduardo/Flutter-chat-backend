/*
    path: api/usuarios
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getUsuario } = require('../controllers/usuarios');

const router = Router();

// validarJWT
router.get('/', validarJWT, getUsuario);

module.exports = router;