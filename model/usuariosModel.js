const { Schema, model } = require('mongoose')

const usuario = new Schema({
    correo:{
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
        dropDups: true 
    },
    nombre:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    },
    tipoUsuario:{
        type: String,
        enum:["ESTUDIANTE", "LIDER", "ADMINISTRADOR"]
    },
    estado:{
        type: String,
        enum:["PENDIENTE","AUTORIZADO","NO AUTORIZADO"],
        required: false,
        default: 'PENDIENTE'
    },
    activo:{
        type: Boolean,
        required: false,
        default: true
    }

},
{
    timestamps : true
})
module.exports = model('usuarios', usuario, "usuarios")


