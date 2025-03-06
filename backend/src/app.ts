import express from 'express'
import bodyParser from 'body-parser'
import { Task } from './task-types.js'
import cors from 'cors'

const app = express()
const tasks: Array<Task> = [{
  name: 'Default task',
  due: new Date(Date.now() + 3600),
  description: 'A default task from the backend',
  complete: false
}]

app.use(bodyParser.json())
app.use(
  cors({
    origin: ['http://localhost:4200'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'Set-Cookie'],
    credentials: true,
  }),
)

app.get('/healthcheck', function(req, res) {
  res.status(200).json({ success: true })
  return
})

app.use(function(req, res, next) {
  console.log(req.method + ' request at route ' + req.url)
  next()
})

app.get('/api/tasks', async (req, res) => {
  res.json(tasks)
  return
})

app.post('/api/tasks', async (req, res) => {
  const { task } = req.body
  tasks.push(task)
  res.status(201).send()
  return
})

/* Create your new route here */

app.delete('/api/tasks/:index', async (req, res) => {
  const { index } = req.params
  try {
    tasks.splice(parseInt(index))
    res.status(204).send()
    return
  } catch (e) {
    console.log(e)
    res.status(404).send()
    return
  }
})

app.listen(5200, () => console.log('Listening on port 5200'))
