const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = 3000

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => { res.render('index.html') })

app.post('/dados', (req, res) => {
    let data = req.body
    res.render('dados.html', { data })
})

app.listen(port, () => { console.log(`App listening on port ${port}`) })