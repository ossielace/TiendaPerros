"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_comprasController_1 = require("../controllers/usuarios_comprasController");
class Usuarios_comprasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosUsuarios_compras/', usuarios_comprasController_1.usuarios_comprasController.mostrar_todos_usuarios_compras);
        this.router.get('/obtenerUsuario_compra/:id', usuarios_comprasController_1.usuarios_comprasController.listOne);
        this.router.post('/crearUsuario_compra/', usuarios_comprasController_1.usuarios_comprasController.createUsuario_compra);
        this.router.put('/actualizarUsuario_compra/:id', usuarios_comprasController_1.usuarios_comprasController.actualizarUsuario_compra);
        this.router.delete('/eliminarUsuario_compra/:id', usuarios_comprasController_1.usuarios_comprasController.eliminarUsuario_compra);
    }
}
const usuarios_comprasRoutes = new Usuarios_comprasRoutes();
exports.default = usuarios_comprasRoutes.router;
