import db from './dummyData.js';
 export const resolvers = {
    Query : {
      books: () => db.books, // here the resolvers are functions and we can call them even from another file
      publications: () => db.publications,
      authors: () => db.authors,
      book: (parent, args, context, info) => {
        // context , contains the request and response objects, so we can access the headers from the request object
        // for example, console.log(context.req.headers);  // this will print out all of our request headers if they exist
        // args contains all the parameters passed to the query, like in this case, the name of the book
        return db.books.find(book => book.name === args.name)
      }
    },
    Mutation : {
      deleteBook: (parent, args, context, info) => {
        // const deletedBook = db.books.find(book => book.name === args.name);
        db.books = db.books.filter(book => book.name !== args.name);
        return db.books;
      },
      addBook : (_,args) => {
        const newBook = args.book
        db.books.push(newBook);
        return db.books;
      }

    }
  
  }