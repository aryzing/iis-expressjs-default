var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello Alex!')
})

var port = process.env.PORT || 6121

console.log(`process.env.PORT: ${process.env.PORT}`)
console.log(`App will start on port: ${port}`)

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${port}!`)
})
