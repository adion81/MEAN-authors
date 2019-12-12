
const authors = require('../controllers/authors');

module.exports = (app) => {
    app.get('/api/authors', (req,res) => authors.index(req,res))
    app.get('/api/authors/:id', (req,res) => authors.show(req,res) )
    app.post('/api/authors/create', (req,res) => authors.create(req,res))
    app.put('/api/authors/update/:id', (req,res) => authors.update(req,res))
    app.delete('/api/authors/destroy/:id', (req,res) => authors.destroy(req,res))
}