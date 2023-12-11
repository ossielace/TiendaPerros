"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = require("../controllers/rolesController");
class RolesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosRoles/', rolesController_1.rolesController.mostrar_todos_roles);
        this.router.get('/obtenerRol/:id', rolesController_1.rolesController.listOne);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
