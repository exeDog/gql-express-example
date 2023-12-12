const {BookType, AuthorType} = require("./types");
const {GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql/index");
const {books, authors} = require("./sample-data");

const AddBookMutation = {
    type: BookType,
    description: 'Add a new book',
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        authorsId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: (parent, args) => {
        const book = {id: books.length + 1, title: args.name, authorsId: args.authorsId};
        books.push(book);
        return book;
    }
}

const AddAuthorMutation = {
    type: AuthorType,
    description: 'Add a new author',
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (parent, args) => {
        const author = {id: authors.length + 1, name: args.name};
        authors.push(author);
        return author;
    }
}

module.exports = {
    AddBookMutation
}
