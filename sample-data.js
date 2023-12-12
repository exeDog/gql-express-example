const authors = [
    {
        id: 1,
        name: 'J.K. Rowling'
    },
    {
        id: 2,
        name: 'Michael Crichton'
    },
    {
        id: 3,
        name: 'Stephen King'
    }
]

const books = [
    {
        id: 1,
        title: 'Harry Potter and the Sorcerers Stone',
        authorsId: 1,
    },
    {
        id: 2,
        title: 'Jurassic Park',
        authorsId: 2,
    },
    {
        id: 3,
        title: 'The Lost World',
        authorsId: 2,
    },
    {
        id: 4,
        title: 'The Shining',
        authorsId: 3,
    },
    {
        id: 5,
        title: 'IT',
        authorsId: 3,
    },
    {
        id: 6,
        title: 'Harry Potter and the Chamber of Secrets',
        authorsId: 1,
    },
    {
        id: 7,
        title: 'Harry Potter and the Prisoner of Azkaban',
        authorsId: 1,
    }
]

module.exports = {
    authors,
    books
}
