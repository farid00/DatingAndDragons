import React from 'react'
import { match, RoutingContext } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import hogan from 'hogan-express'
import App from './components/App.jsx'
import { StaticRouter } from 'react-router'

// Express
const app = express()
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))

app.use((req, res) => {
  const context = {}

  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  res.locals.markup = markup

  if (context.url) {
    res.writeHead(301, {Location: context.url})
    res.end()
  } else {
    res.status(200).render('index.html')
  }
})


app.listen(app.get('port'))

console.info('==> Server is listening in ' + process.env.NODE_ENV + ' mode')
console.info('==> Go to http://localhost:%s', app.get('port'))