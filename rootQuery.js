const {GraphQLObjectType} = require("graphql/index");
const {BookField, BooksField, AuthorField, AuthorsField} = require("./queries");

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: BooksField,
        authors: AuthorsField,
        book: BookField,
        author: AuthorField
    })
});

module.exports = {
    RootQueryType
}
