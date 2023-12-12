const {GraphQLObjectType} = require("graphql/index");

const {AddBookMutation} = require("./mutations");

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: AddBookMutation
    })
});

module.exports = {
    RootMutationType
}
