const NotaController = require('../controller/nota.controller')
 


module.exports = (app) => {
    
    app.post('/api/notas', [ NotaController.createOne]);

    app.get('/api/notas/:id', [NotaController.findOne]);

    app.get('/api/notas', [NotaController.findAll])

    
    
}
