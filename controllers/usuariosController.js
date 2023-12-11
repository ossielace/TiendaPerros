"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class UsuariosController {
    mostrar_todos_usuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM usuario');
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Usuario no encontrado' });
        });
    }
    //aqui va el crud
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query("INSERT INTO usuario set ?", [req.body]);
            res.json(resp);
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const resp = yield database_1.default.query("UPDATE usuario set ? WHERE id_usuario = ?", [req.body, id]);
            res.json(resp);
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
            res.json(resp);
        });
    }
    listarUsuariosRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`SELECT nombre, nombre_rol FROM  usuario LEFT JOIN roles on usuario.id_rol = roles.id_rol WHERE usuario.id_rol = ${id};`);
            res.json(resp);
        });
    }
    ValidarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const parametros = req.body;
            var consulta = `SELECT id_rol, correo FROM usuario WHERE correo = '${parametros.correo}' AND password = '${parametros.password}'`;
            const resp = yield database_1.default.query(consulta);
            if (resp.length > 0)
                res.json(resp);
            else
                res.json({ "id_Rol": "incorrecto" });
        });
    }
}
exports.usuariosController = new UsuariosController();
