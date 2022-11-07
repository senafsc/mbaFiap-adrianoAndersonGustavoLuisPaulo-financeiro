const mongoose = require("mongoose");


const SchemaUsers = new mongoose.Schema({
  idusuario: { type: String, required: true},
  nomeubanco: { type: String, required: true},
  tipoconta: { type: String, required: true},
  nometitular: { type: String, required: true },
  limitecartao: { type: String, required: true },
});

module.exports = mongoose.model("usuario", SchemaUsers);

