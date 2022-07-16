import { WebSocketServer } from 'ws'
import { v4 as uuidv4 } from 'uuid'
import express from 'express'
const app = express()
const rootDir = __dirname.replace('/dist', '')
const clients = new Map()

app.use(express.static(`${rootDir}/public`))
app.get('/', (req: express.Request, res: express.Response) => {
  console.log('...request received')
  res.sendFile(`${rootDir}/public/index.html`)
})
const server = app.listen(8080, () => console.log('listening'))

const wss = new WebSocketServer({ server: server })
wss.on('connection', (ws) => {
  console.log('new connection')
  const id = uuidv4()
  clients.set(ws, id)
  console.log(clients)

  ws.on('message', (inboundMessage: string) => {
    const messageParsed = JSON.parse(inboundMessage)
    console.log('received: %s', messageParsed)
    messageParsed.senderId = id
    const outboundMessage = JSON.stringify(messageParsed)
    Array.from(clients.keys()).forEach((client) => {
      console.log(client)
      client.send(outboundMessage)
    })
  })
})
