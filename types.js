const {GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList} = require("graphql/index");
const {books, authors} = require("./sample-data");
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Represents an author of a book',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorsId === author.id)
            }
        }
    })
});

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Represents a book',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        authorsId: {type: new GraphQLNonNull(GraphQLInt)},
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorsId)
            }
        }
    })
});

module.exports = {
    BookType,
    AuthorType
}
