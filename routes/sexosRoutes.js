"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sexosController_1 = require("../controllers/sexosController");
class SexosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosSexos/', sexosController_1.sexosController.mostrar_todos_sexos);
        this.router.get('/obtenerSexo/:id', sexosController_1.sexosController.listOne);
    }
}
const sexosRoutes = new SexosRoutes();
exports.default = sexosRoutes.router;
