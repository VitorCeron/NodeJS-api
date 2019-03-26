var app = require('./config/server');

var port = process.env.PORT_SERVER || 1111; 
app.listen(port, function(){
    console.log('Servidor rodando na porta: ' + port);
});