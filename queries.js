const {BookType, AuthorType} = require("./types");
const {GraphQLInt, GraphQLList} = require("graphql/index");
const {books, authors} = require("./sample-data");
const BookField = {
    type: BookType,
    description: 'A single book',
    args: {
        id: {
            type: GraphQLInt
        }
    },
    resolve(_parent, args) {
        return books.find(book => book.id === args.id)
    }
}

const BooksField = {
    type: new GraphQLList(BookType),
    description: 'List of books',
    resolve: () => books
}

const AuthorsField = {
    type: new GraphQLList(AuthorType),
    description: 'List of authors',
    resolve: () => authors
}

const AuthorField = {
    type: AuthorType,
    description: 'A single author',
    args: {
        id: {
            type: GraphQLInt
        }
    },
    resolve(_parent, args) {
        return authors.find(author => author.id === args.id)
    }
}

module.exports = {
    BookField,
    BooksField,
    AuthorField,
    AuthorsField
}
