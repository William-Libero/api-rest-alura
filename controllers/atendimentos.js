const Atendimentos = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, resp) => resp.send('Atendimentos GET'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimentos.adiciona(atendimento, res)
    })
}