var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello Alex!')
})

app.get('/*', (req, res) => {
  console.log('Wildcard route matched')
  res.send(`
    Hi! The wildcard route was matched.
    value was obtained environment: ${process.env.MY_ENV_VARIABLE}.
    The original url: ${req.originalUrl}.
  `)
})

var port = process.env.PORT || 6121

console.log(`process.env.PORT: ${process.env.PORT}`)
console.log(`App will start on port: ${port}`)

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${port}!`)
})
