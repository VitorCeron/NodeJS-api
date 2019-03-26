module.exports = function(){
    var mongoose = require('mongoose');

    const options = {
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000, 
        socketTimeoutMS: 45000, 
        useNewUrlParser: true
      };
      var url = 'mongodb://localhost:27017/tarefas';
      mongoose.connect(url, options, function(error) {
          if (error){
              console.log('Erro ao conectar a base de dados: ' + error);
          } else {
              console.log('Conectado ao banco de dados.');
          }
        
      });

    require('../app/model/tarefaModel');
};