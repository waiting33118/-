const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const hostname = `192.168.1.112`
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
	res.render('index')
})

app.post('/', (req, res) => {
	res.render('index')
})

app.listen(port, hostname, () => {
	console.log(`The Server is running on http://${hostname}:${port}`)
})
