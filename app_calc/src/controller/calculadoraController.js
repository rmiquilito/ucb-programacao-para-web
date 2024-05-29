const calculadora = require('../calculadora/calculator')

function index(req, res) {
    let err = req.query.err
    res.render('index.html', { err })
}

function result(req, res) {
    let a = Number(req.body.a)
    let b = Number(req.body.b)
    let operator = req.body.operator
    let result

    if (!isNaN(a) && !isNaN(b)) {
        let operation = calculadora.calculate(a, b, operator)
        let action = operation.action
        let result = operation.result
        res.render('resultado.html', { a, b, operator, result, action })
    } else { res.redirect('/?err=true') }
}

module.exports = { index, result }