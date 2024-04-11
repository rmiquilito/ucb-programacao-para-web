const express = require('express')
const calculator = require('./util/calculadora')
const app = express()
const port = 3000

app.get('/somar/:a/:b', (req, res) => {
    let a = req.params.a
    let b = req.params.b
    let result = calculator.add(a, b)

    res.send(`${result}`)
})

app.get('/subtrair/:a/:b', (req, res) => {
    let a = req.params.a
    let b = req.params.b
    let result = calculator.subtract(a, b)

    res.send(`${result}`)
})

app.get('/multiplicar/:a/:b', (req, res) => {
    let a = req.params.a
    let b = req.params.b
    let result = calculator.multiply(a, b)

    res.send(`${result}`)
})

app.get('/dividir/:a/:b', (req, res) => {
    let a = req.params.a
    let b = req.params.b
    let result = calculator.divide(a, b)

    res.send(`${result}`)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})