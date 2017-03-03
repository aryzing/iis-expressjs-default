var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello Alex!')
})

app.get('/*', (req, res) => {
  console.log('Wildcard route matched')
  res.set('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Test</title>
      </head>
      <body>
        <h1>Test IIS Node server</h1>
        <h3>Hi team, soon the CFA will be here!</h3>
        <h2>Debug info</h2>
        <pre>
          The wildcard route was matched.
          value was obtained environment: ${process.env.MY_ENV_VARIABLE}.
          The original url: ${req.originalUrl}.
        </pre>
      </body>
    </html>
  `)
})

var port = process.env.PORT || 6121

console.log(`process.env.PORT: ${process.env.PORT}`)
console.log(`App will start on port: ${port}`)

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${port}!`)
})
