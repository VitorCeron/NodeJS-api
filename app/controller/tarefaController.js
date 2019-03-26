'use strict';

var mongoose = require('mongoose'),
    Tarefa = mongoose.model('Tarefa');

exports.insertTarefa = function (req, res) {
    var newTarefa = new Tarefa(req.body);
    newTarefa.save(function (err, Tarefa) {
        if (err)
            res.send(err);
        res.json(Tarefa);
    });
};

exports.updateTarefa = function (req, res) {
    Tarefa.findOneAndUpdate({ _id: req.params.tarefaId }, req.body, { new: true }, function (err, Tarefa) {
        if (err)
            res.send(err);
        res.json(Tarefa);
    });
};

exports.getAllTarefa = function (req, res) {
    Tarefa.find({}, function (err, Tarefa) {
        if (err)
            res.send(err);
        res.json(Tarefa);
    });
};

exports.getByIdTarefa = function (req, res) {
    Tarefa.findById(req.params.tarefaId, function (err, Tarefa) {
        if (err)
            res.send(err);
        res.json(Tarefa);
    });
};

exports.deleteTarefa = function (req, res) {
    Tarefa.remove({
        _id: req.params.tarefaId
    }, function (err, tarefa) {
        if (err)
            res.send(err);
        res.json({ message: 'Tarefa successfully deleted' });
    });
};