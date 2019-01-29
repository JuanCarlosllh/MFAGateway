const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
const auth = require('./routes/auth')
const schema = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }) => ({
    user: req.user
  }),
  formatError: error => {
    console.log(error)
    delete error.extensions.exception
    return error
  }
})

require('./passport')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(auth)
app.use('/graphql', passport.authenticate('jwt', { session: false }))

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
