const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello/:vardas', (req, res) => {
    res.send(`Hello, ${req.params.vardas}`)
})

app.get('/sum/:a/:b', (req, res) => {
    res.send(`Sum: ${parseFloat(req.params.a) + parseFloat(req.params.b)}`)
})

app.get('/diff/:a/:b', (req, res) => {
    res.send(`Difference: ${parseFloat(req.params.a) - parseFloat(req.params.b)}`)
})

app.get('/multi/:a/:b', (req, res) => {
    res.send(`Multiplication: ${parseFloat(req.params.a) * parseFloat(req.params.b)}`)
})

app.get('/div/:a/:b', (req, res) => {
    res.send(`Division: ${parseFloat(req.params.a) / parseFloat(req.params.b)}`)
})

app.listen(port, () => {
  console.log(`App is working on: http://localhost:${port}`)
})