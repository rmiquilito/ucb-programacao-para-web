const express = require('express')
const app = express()
const port = 3000

const stock = require('./stock')

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let id = req.params.id
    let name = req.params.nome
    let amount = req.params.qtd

    let item = stock.register(id, name, amount)
    stock.add(item)

    res.send(item)
})


app.get('/listar', (req, res) => res.send(stock.list()))


app.get('/remover/:id', (req, res) => {
    let id = req.params.id

    let item = stock.search(id)

    stock.remove(id)
    res.send(item)
})


app.get('/editar/:id/:qtd', (req, res) => {
    let id = req.params.id
    let amount = req.params.qtd

    let item = stock.search(id)

    res.send(item)
    stock.edit(id, amount)
})

app.listen(port, () => console.log(`App listening on port ${port}`))