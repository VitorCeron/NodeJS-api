'use strict';
module.exports = function(app) {
  var tarefa = require('../controller/tarefaController');

  app.route('/tarefa')
    .get(tarefa.getAllTarefa)
    .post(tarefa.insertTarefa);

  app.route('/tarefa/:tarefaId')
    .get(tarefa.getByIdTarefa)
    .put(tarefa.updateTarefa)
    .delete(tarefa.deleteTarefa);

};