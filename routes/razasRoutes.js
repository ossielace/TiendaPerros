"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const razasController_1 = require("../controllers/razasController");
class RazasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosRazas/', razasController_1.razasController.mostrar_todos_razas);
        this.router.get('/obtenerRaza/:id', razasController_1.razasController.listOne);
        this.router.post('/crearRaza/', razasController_1.razasController.createRaza);
        this.router.put('/actualizarRaza/:id', razasController_1.razasController.actualizarRaza);
        this.router.delete('/eliminarRaza/:id', razasController_1.razasController.eliminarRaza);
    }
}
const razasRoutes = new RazasRoutes();
exports.default = razasRoutes.router;
