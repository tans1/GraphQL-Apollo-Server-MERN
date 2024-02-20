/*
This is for  Apollo server integrated with expressJs

*/

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.get('/api', async (req, res) => { // example for other endpoints for the express app
  return res.json({ data: 'Hello World' });
 });

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
async function startApolloServer() {
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers ,
    // context: ({req, res}) => ({req, res}) // to pass the request and response objects to the context so that they can be accessed in the resolver functions
    context : ({req, res}) => {
       // This is where you would add your authentication logic if it is necessary

       // console.log(req.headers) will give you access to headers sent by client
      return {req, res}
    }
  
  });
  await server.start();
  server.applyMiddleware({ 
    app, 
    path: '/graphql'
    });  // the graphQL endpoint, the request will be handled by ApolloServer through this endpoint
}


startApolloServer().then(() => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
  });
});







