import fastify from 'fastify'
import cors from '@fastify/cors'

const server = fastify({logger: true})
server.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
})

server.get('/', async (request, reply) => {
  return 'Hello there! 👋'
})
server.get('/test', async (request, reply) => {
    return {json: true}
})

server.listen({port: 8080}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Started server at ${address}`)

})