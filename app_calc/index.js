const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = 3000

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')

app.use(express.urlencoded({ extended: true }))
app.use('/', require('./src/routes/calculadoraRoutes'))

app.listen(port, () => { console.log(`App listening on port ${port}`) })