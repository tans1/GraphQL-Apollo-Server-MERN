// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Book {
    name : String
    author : String
    title : String
    price : Float
  }
  type Author {
    name : String
    age : Int
    sex : String
  }
  type Publication {
    publisherCompanyName : String
    location : String
    date : String
  }

   # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "games" query returns an array of zero or more Game (defined above).
  type Query {
    books: [Book]
    book(name: String!) : Book  # this is a query with a parameter,(get by name(id)) and it isn't nullable
    publications: [Publication]
    authors: [Author]
  }

  type Mutation {
    deleteBook(name : String!) : [Book]
    addBook(book : AddBookType!) : [Book]

  }

  input AddBookType {
    name : String!
    author : String!
    title : String!
    price : Float!
  }
`
