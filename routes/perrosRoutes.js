"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const perrosController_1 = require("../controllers/perrosController");
class PerrosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPerros/', perrosController_1.perrosController.mostrar_todos_perros);
        this.router.get('/obtenerPerro/:id', perrosController_1.perrosController.listOne);
        this.router.post('/crearPerro/', perrosController_1.perrosController.createPerro);
        this.router.put('/actualizarPerro/:id', perrosController_1.perrosController.actualizarPerro);
        this.router.delete('/eliminarPerro/:id', perrosController_1.perrosController.eliminarPerro);
    }
}
const perrosRoutes = new PerrosRoutes();
exports.default = perrosRoutes.router;
