'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TarefaSchema = new Schema({
	dataCriacaoTarefa: Date,
	dataAlteracaoTarefa: Date,
	tituloTarefa: String,
	descricaoTarefa: String
});

module.exports = mongoose.model('Tarefa', TarefaSchema);