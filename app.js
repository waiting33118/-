const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const hostname = `localhost`
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.render('index')
})

app.post('/', (req, res) => {
	console.log(req.body)
	res.render('index')
})

app.listen(port, hostname, () => {
	console.log(`The Server is running on http://${hostname}:${port}`)
})
