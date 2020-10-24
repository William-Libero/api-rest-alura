module.exports = app => {
    app.get('/atendimentos', (req, resp) => resp.send('Atendimentos GET'))

    app.post('/atendimentos', (req, resp) => {
        console.log(req.body)
        resp.send('Atendimentos POST')
    })
}