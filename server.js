const express = require('express');

const {graphqlHTTP} = require('express-graphql');

const app = express();

const {GraphQLSchema} = require('graphql');
const {RootQueryType} = require("./rootQuery");
const {RootMutationType} = require("./rootMutation");

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(9009, () => console.log('Server is running on port 9009'));

