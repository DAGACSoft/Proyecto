const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TiendaSchema = new Schema({
    nameProduct: String,
    cantidad: Number,
    precio: Number,
    imagen: String
})

var Producto = mongoose.model('Producto',TiendaSchema)
module.exports = Producto
