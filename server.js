'use strict'

var url = require('url')
var fs = require('fs')
var path = require('path')
var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

// Redirect all to '/' so angular can take over via the single page app side of things.
const root = path.join(__dirname, 'web')
app.use(function (req, res, next) {
  var filename = url.parse(req.url)
  filename = filename.href.split(filename.search).join('')
  filename = filename.substring(filename.indexOf('/web'))

  req.url = filename

  if (!fs.existsSync(path.join(root, filename))) {
    req.url = '/index.html'
  }

  return next()
})

app.use(express.static(root))

app.listen(8181)
console.log('App listening on port 8181')
